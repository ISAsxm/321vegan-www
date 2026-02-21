import { fetchPartners } from "@/app/lib/data-services";
import PartnersListItem from "./PartnersListItem";

const PartnersList = async () => {
  const partnersData = await fetchPartners();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 w-full">
      {partnersData
        .filter((p) => p.is_active === true)
        .sort((a, b) => Number(b.is_affiliate) - Number(a.is_affiliate))
        .map((partner, index) => (
          <PartnersListItem key={`partner-${index}`} partner={partner} />
        ))}
    </div>
  );
};

export default PartnersList;
