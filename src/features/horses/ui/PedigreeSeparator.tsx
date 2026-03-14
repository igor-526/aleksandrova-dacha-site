import { cn } from "@/ui";

export type PedigreeSeparatorProps = {
    vertical?: boolean,
    level: "level12" | "level23",
    style: { gridArea: string },
    className?: string
}

export const PedigreeSeparator = ({ vertical = false, level, style, className }: PedigreeSeparatorProps) => {

    const styleSeparator = {
        container: "",
        separator: "",
    }

    if (vertical) {
        switch (level) {
            case "level12":
                styleSeparator.container = "flex items-center justify-center";
                styleSeparator.separator = "w-[50%] h-full border border-[#2f3600] border-b-0";
                break;
            case "level23":
                styleSeparator.container = "flex items-center justify-center";
                styleSeparator.separator = "w-full h-[50%] border border-[#2f3600] border-r-0";
                break;
            default:
                break;
        }
    } else {
        switch (level) {
            case "level12":
                styleSeparator.container = "pl-2 flex items-center justify-center";
                styleSeparator.separator = "w-full h-[50%] border border-[#2f3600] border-r-0";
                break;
            case "level23":
                styleSeparator.container = "pl-2 flex items-center justify-center";
                styleSeparator.separator = "w-full h-[50%] border border-[#2f3600] border-r-0";
                break;
            default:
                break;
        }
    }

    return (
        <div style={style} className={cn(styleSeparator.container, className)}>
            <div className={styleSeparator.separator}></div>
        </div>
    )
}
