import Http from '@/utils/request/index'
import { ChatResponse } from '@/utils/interface/index'

export const getChatReply = (data?: any) => {
    return Http.post<ChatResponse>("/api/ChatGpt/getChatReply", data);
}