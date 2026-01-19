import { partnersData } from "@/assets/assets";
import PartnersListItem from "./PartnersListItem";

const PartnersList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 w-full">
      {partnersData
        .sort((a, b) => Number(b.affiliate) - Number(a.affiliate))
        .map((partner, index) => (
          <PartnersListItem key={`partner-${index}`} partner={partner} />
        ))}
    </div>
  );
};

export default PartnersList;
