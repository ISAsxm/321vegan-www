import { StaticImageData } from "next/image";

export type ContactFormData = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  subject: string;
};

export type OwnerType = {
  name: string;
  email: string;
  address: string;
  website: string;
  webhosting: string;
};

export type AppStoreLinksType = {
  apple: string;
  google: string;
};

export type SocialNetworkLinksType = {
  instagram: string;
  discord: string;
  github: string;
  buymeacoffee: string;
};

export type SitmapDataType = { url: string; label: string; category: string };

export type FeatureDataType = {
  title: string;
  icon: string;
  bgImage: StaticImageData;
  link: string;
  description: string;
};

export type ContributionDataType = {
  icon: string;
  title: string;
  description: string;
};

export type TestimonialDataType = {
  username: string;
  date: string;
  rate: number;
  title: string;
  comment: string;
};

export type FaqDataType = {
  title: string;
  description: string;
};

export type PartnerCategorieDataType = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
};

export type PartnerDataType = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  url: string;
  logo_path: string;
  description: string;
  discount_text: string;
  discount_code: string;
  is_affiliate: boolean;
  show_code_in_website: boolean;
  is_active: boolean;
  category_id: number;
  category: PartnerCategorieDataType;
};

export type SourceDataLinkType = {
  url: string;
  label: string;
};

export type SourceDataType = {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: SourceDataLinkType;
};

export type CosmeticsLabelDataType = {
  logo: StaticImageData;
  name: string;
  certify: boolean[];
};

export type AdditiveDataType = {
  id: number;
  created_at: string;
  updated_at: string;
  e_number: string;
  name: string;
  description: string;
  status: string;
  source: string;
};
