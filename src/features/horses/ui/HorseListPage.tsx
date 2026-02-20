import {
    Container,
} from "@/ui";
import { HorseOutDto } from "@/types";
import HorseList from "./HorseList";

export type HorseListPageProps = {
    horses?: HorseOutDto[] | null;
};

export const HorseListPage = ({
    horses,
}: HorseListPageProps) => {
    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Container className="space-y-12">
                {horses && horses.length > 0 && (
                    <HorseList items={horses} />
                )}
            </Container>
        </div>
    );
};