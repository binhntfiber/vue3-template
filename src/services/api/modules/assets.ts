import type { AssetsApiResponse, AssetApiParams } from "@/types/assets.type";
import api from "../index";

export const loadAssetsByParams = async (params: AssetApiParams) => {
  try {
    const { data } = await api.get<AssetApiParams, AssetsApiResponse>(
      "/settings/assets",
      params
    );
    return data.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
