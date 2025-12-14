import { callBackRequestCreate } from "@/api/callBackRequest";
import { CallBackRequestInDto } from "@/types/callBackRequest";

export const sendCallBackRequest = async (data: CallBackRequestInDto): Promise<void> => {
    const response = await callBackRequestCreate(data);
    if (response.status === "error") {
        throw new Error(response.data?.detail || "Ошибка при отправке запроса");
    }
};
