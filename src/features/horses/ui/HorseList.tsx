"use client";

import { fetchHorseList } from "../data/horseService";
import { HorseListQueryParams, HorseOutDto } from "@/types";
import { Button, cn } from "@/ui";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import HorseCard from "./HorseCard";

export type HorseListProps = {
    heading?: string;
    content?: ReactNode;
    items: HorseOutDto[];
    columns?: 1 | 2 | 3 | 5;
    visibleRows?: number;
    fetchParams?: HorseListQueryParams;
    totalItems?: number;
    pageSize?: number;
    className?: string;
};

const getColumnsCount = (columns: NonNullable<HorseListProps["columns"]>, width: number) => {
    if (columns === 1) return 1;
    if (columns === 2) return width >= 768 ? 2 : 1;
    if (columns === 3) return width >= 768 ? 3 : 2;
    if (width >= 1024) return 5;
    if (width >= 768) return 4;
    if (width >= 640) return 3;
    return 2;
};

const HorseList = ({
    heading,
    content,
    items = [],
    columns = 3,
    visibleRows,
    fetchParams,
    totalItems,
    pageSize,
    className,
}: HorseListProps) => {
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);
    const [loadedItems, setLoadedItems] = useState(items);
    const [loadedRows, setLoadedRows] = useState(() =>
        visibleRows && visibleRows > 0 ? visibleRows : Number.POSITIVE_INFINITY
    );
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [resolvedTotalItems, setResolvedTotalItems] = useState(totalItems ?? items.length);

    useEffect(() => {
        setLoadedItems(items);
    }, [items]);

    useEffect(() => {
        setResolvedTotalItems(totalItems ?? items.length);
    }, [items.length, totalItems]);

    useEffect(() => {
        setLoadedRows(visibleRows && visibleRows > 0 ? visibleRows : Number.POSITIVE_INFINITY);
    }, [visibleRows]);

    useEffect(() => {
        const updateViewportWidth = () => setViewportWidth(window.innerWidth);

        updateViewportWidth();
        window.addEventListener("resize", updateViewportWidth);

        return () => window.removeEventListener("resize", updateViewportWidth);
    }, []);

    const currentColumns = useMemo(() => {
        if (viewportWidth === null) {
            return columns;
        }

        return getColumnsCount(columns, viewportWidth);
    }, [columns, viewportWidth]);

    const visibleItemsCount = useMemo(() => {
        if (!Number.isFinite(loadedRows)) {
            return loadedItems.length;
        }

        return Math.min(loadedItems.length, loadedRows * currentColumns);
    }, [currentColumns, loadedItems.length, loadedRows]);

    const visibleItems = loadedItems.slice(0, visibleItemsCount);
    const hasHiddenLoadedItems = visibleItemsCount < loadedItems.length;
    const hasMoreInDatabase = loadedItems.length < resolvedTotalItems;
    const canShowMore = Boolean(visibleRows && visibleRows > 0 && (hasHiddenLoadedItems || hasMoreInDatabase));

    const handleShowMore = async () => {
        if (!visibleRows || visibleRows <= 0) {
            return;
        }

        setLoadedRows((previousRows) => previousRows + visibleRows);

        if (!fetchParams || isLoadingMore || !hasMoreInDatabase) {
            return;
        }

        const nextPageSize = pageSize ?? loadedItems.length;

        if (loadedItems.length >= visibleItemsCount + visibleRows * currentColumns) {
            return;
        }

        setIsLoadingMore(true);

        const result = await fetchHorseList({
            ...fetchParams,
            limit: nextPageSize,
            offset: loadedItems.length,
        });

        if (result.status === "ok" && result.data) {
            const { items: nextItems, total } = result.data;
            setLoadedItems((previousItems) => [...previousItems, ...nextItems]);
            setResolvedTotalItems(total);
        }

        setIsLoadingMore(false);
    };

    return (
        <section className={cn("space-y-6 mx-auto font-serif", className)}>
            {heading && (
                <div className="px-6">
                    <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
                        {heading}
                    </h2>
                </div>
            )}
            {content && (
                <div className="px-6 font-serif text-sm md:text-md lg:text-lg text-[#2f3600]">
                    {content}
                </div>
            )}
            <div
                className={cn(
                    "grid gap-6 items-stretch justify-items-stretch",
                    columns === 1 && "grid-cols-1",
                    columns === 2 && "sm:grid-cols-1 md:grid-cols-2",
                    columns === 3 && "grid-cols-2 md:grid-cols-3",
                    columns === 5 && "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
                    className
                )}
            >
                {visibleItems.map((item, index) => {
                    return <Link key={index} href={`/horses/${item.slug}`}><HorseCard horse={item} className="h-full" /></Link>;
                })}
            </div>
            {canShowMore && (
                <div className="flex justify-center px-6">
                    <Button
                        variant="primary"
                        size="md"
                        className="w-full max-w-[220px] bg-[#b86a3b] px-4 py-2 text-sm text-[#fffaf1] hover:bg-[#9f5830] sm:w-auto sm:max-w-none sm:px-6 sm:py-2.5 sm:text-base"
                        loading={isLoadingMore}
                        onClick={handleShowMore}
                    >
                        Показать еще
                    </Button>
                </div>
            )}
        </section >
    );
};

export default HorseList;
