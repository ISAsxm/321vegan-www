"use server";
import axiosInstance from "@/app/utils/axiosInstance";
import { PartnerDataType } from "@/types/definitions";

export const fetchPartners = async (): Promise<PartnerDataType[]> => {
  try {
    const { data } = await axiosInstance.get("/partners");
    return data;
  } catch (error) {
    console.error("Error fetching partners:", error);
    throw new Error("Failed to fetch partners");
  }
};
