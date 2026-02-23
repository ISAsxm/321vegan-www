"use server";
import axiosInstance from "@/app/utils/axiosInstance";
import { PartnerDataType, AdditiveDataType } from "@/types/definitions";

export const fetchPartners = async (): Promise<PartnerDataType[]> => {
  try {
    const { data } = await axiosInstance.get("/partners");
    return data;
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
};

export const fetchAdditives = async (): Promise<AdditiveDataType[]> => {
  try {
    const { data } = await axiosInstance.get("/additives");
    return data;
  } catch (error) {
    console.error("Error fetching additives:", error);
    return [];
  }
};
