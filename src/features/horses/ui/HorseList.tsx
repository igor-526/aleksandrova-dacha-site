"use client";

import { fetchHorseList } from "../data/horseService";
import { HorseListQueryParams, HorseOutDto } from "@/types";
import { Button, cn } from "@/ui";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import HorseCard from "./HorseCard";

export type HorsesByBreedItem = {
    breed: { id: string; name: string; slug: string };
    horses: HorseOutDto[];
    total: number;
};

export type HorseListProps = {
    heading?: string;
    content?: ReactNode;
    items?: HorseOutDto[];
    itemsByBreed?: HorsesByBreedItem[];
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
    items,
    itemsByBreed,
    columns = 3,
    visibleRows,
    fetchParams,
    totalItems,
    pageSize,
    className,
}: HorseListProps) => {
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);
    const [loadedItems, setLoadedItems] = useState<HorseOutDto[]>(() => items ?? []);
    const [loadedRows, setLoadedRows] = useState(() =>
        visibleRows && visibleRows > 0 ? visibleRows : Number.POSITIVE_INFINITY
    );
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [resolvedTotalItems, setResolvedTotalItems] = useState<number>(totalItems ?? (items ? items.length : 0));
    const [visibleRowsByBreed, setVisibleRowsByBreed] = useState<Record<string, number>>(() => {
        const initialRows = visibleRows && visibleRows > 0 ? visibleRows : Number.POSITIVE_INFINITY;
        return Object.fromEntries(
            (itemsByBreed ?? []).map((item) => [item.breed.id, initialRows])
        );
    });
    const [loadedItemsByBreed, setLoadedItemsByBreed] = useState<HorsesByBreedItem[] | undefined>(() => itemsByBreed);
    const [hasMoreByBreed, setHasMoreByBreed] = useState<Record<string, boolean>>(() => {
        return Object.fromEntries((itemsByBreed ?? []).map((item) => [item.breed.id, item.horses.length < (item.total ?? item.horses.length + 1)]));
    });

    useEffect(() => {
        if (items) {
            setLoadedItems(items);
        }
    }, [items]);

    useEffect(() => {
        setResolvedTotalItems(totalItems ?? (items ? items.length : loadedItems.length));
    }, [totalItems, items, loadedItems.length]);

    useEffect(() => {
        setLoadedRows(visibleRows && visibleRows > 0 ? visibleRows : Number.POSITIVE_INFINITY);
    }, [visibleRows]);

    useEffect(() => {
        const initialRows = visibleRows && visibleRows > 0 ? visibleRows : Number.POSITIVE_INFINITY;
        if (itemsByBreed) {
            setVisibleRowsByBreed(
                Object.fromEntries(
                    itemsByBreed.map((item) => [item.breed.id, initialRows])
                )
            );
            setLoadedItemsByBreed(itemsByBreed);
            setHasMoreByBreed(
                Object.fromEntries(
                    itemsByBreed.map((item) => [item.breed.id, item.horses.length < (item.total ?? item.horses.length + 1)])
                )
            );
        }
    }, [visibleRows, itemsByBreed]);

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

    const handleShowMoreByBreed = (breedId: string) => {
        console.log("handleShowMoreByBreed click", breedId);

        // Просто увеличиваем видимые строки для этой породы
        const currentRows = visibleRowsByBreed[breedId] ?? (visibleRows && visibleRows > 0 ? visibleRows : 0);
        const newRows = currentRows + (visibleRows ?? 6);

        setVisibleRowsByBreed((prev) => ({ ...prev, [breedId]: newRows }));

        // Проверяем, есть ли еще лошади для показа
        const breedEntry = loadedItemsByBreed?.find((b) => b.breed.id === breedId);
        if (breedEntry) {
            const computedColumns = Math.ceil(columns || 3);
            const totalVisibleItems = newRows * computedColumns;
            const hasMoreHorses = totalVisibleItems < breedEntry.horses.length;

            console.log("Show more for breed", breedId, { newRows, computedColumns, totalVisibleItems, totalHorses: breedEntry.horses.length, hasMore: hasMoreHorses });

            setHasMoreByBreed((prev) => ({
                ...prev,
                [breedId]: hasMoreHorses,
            }));
        }
    };

    return (
        <section className={cn("space-y-6 mx-auto", className)}>
            {heading && (
                <div className="px-6">
                    <h2 className="text-[#2f3600]">
                        {heading}
                    </h2>
                </div>
            )}
            {content && (
                <div className="px-6 text-[#2f3600]">
                    {content}
                </div>
            )}

            {(loadedItemsByBreed ?? itemsByBreed) && (loadedItemsByBreed ?? itemsByBreed)!.length > 0 ? (
                // Вывод по породам
                <div className="space-y-12">
                    {(loadedItemsByBreed ?? itemsByBreed)!.map((breedItem) => {
                        const sourceHorses = breedItem.horses;
                        const visibleRows_ = visibleRowsByBreed[breedItem.breed.id] ?? Number.POSITIVE_INFINITY;
                        const total = breedItem.total ?? sourceHorses.length;
                        const visibleItemsCount_ = !Number.isFinite(visibleRows_)
                            ? sourceHorses.length
                            : Math.min(sourceHorses.length, visibleRows_ * (currentColumns || columns));
                        const visibleHorses = sourceHorses.slice(0, visibleItemsCount_);
                        const hiddenLoaded = visibleItemsCount_ < sourceHorses.length;
                        const hasMoreTotal = hasMoreByBreed[breedItem.breed.id] ?? (sourceHorses.length < total);
                        const canShowMore_ = visibleRows_ !== Number.POSITIVE_INFINITY && (hiddenLoaded || hasMoreTotal);

                        return (
                            <div key={breedItem.breed.id} className="space-y-3">
                                <div className="px-6">
                                    <h3 className="text-lg font-semibold text-[#2f3600]">
                                        {breedItem.breed.name}
                                        <span className="ml-2 text-lg font-semibold text-[#2f3600]">
                                            ({(breedItem.horses || []).length})
                                        </span>
                                    </h3>
                                </div>
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
                                    {visibleHorses.map((horse, index) => (
                                        <Link key={index} href={`/horses/${horse.slug}`}>
                                            <HorseCard horse={horse} className="h-full" />
                                        </Link>
                                    ))}
                                </div>
                                {canShowMore_ && (
                                    <div className="flex justify-center px-6">
                                        <Button
                                            variant="primary"
                                            size="md"
                                            className="w-full max-w-[220px] bg-[#b86a3b] px-4 py-2 text-sm text-[#fffaf1] hover:bg-[#9f5830] sm:w-auto sm:max-w-none sm:px-6 sm:py-2.5 sm:text-base"
                                            loading={false}
                                            onClick={() => handleShowMoreByBreed(breedItem.breed.id)}
                                        >
                                            Показать еще
                                        </Button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                // Плоский вывод (старая логика)
                <>
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
                </>
            )}
        </section >
    );
};

export default HorseList;
