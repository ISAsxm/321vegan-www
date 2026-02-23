import { PartnerDataType } from "@/types/definitions";
import PartnersListItem from "./PartnersListItem";

interface PartnersListProps {
  data: PartnerDataType[];
}

const PartnersList = ({ data }: PartnersListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 w-full">
      {data
        .filter((p) => p.is_active === true)
        .sort((a, b) => Number(b.is_affiliate) - Number(a.is_affiliate))
        .map((partner, index) => (
          <PartnersListItem key={`partner-${index}`} partner={partner} />
        ))}
    </div>
  );
};

export default PartnersList;
