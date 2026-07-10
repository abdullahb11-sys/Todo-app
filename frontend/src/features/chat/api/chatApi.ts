import { axiosInstance } from "../../../api/axios";

import type {
  ChatRequest,
  ChatResponse,
} from "../types";

export const chatApi = {
  async send(
    body: ChatRequest
  ): Promise<ChatResponse> {

    const { data } = await axiosInstance.post(
      "http://localhost:8000/chat",
      body
    );

    return data;
  },
};