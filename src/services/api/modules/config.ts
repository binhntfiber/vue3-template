import type { ApiConfigResponse } from "@/types/config.type";
import api from "../index";

export const loadAvailableConfigs = async () => {
  try {
    const { data } = await api.get<unknown, ApiConfigResponse>(
      "/settings/contracts"
    );
    return data.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
