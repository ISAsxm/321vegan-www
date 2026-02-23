import { Suspense } from "react";
import { fetchPartners } from "@/app/lib/datas";
import { PartnersSkeleton } from "@/app/ui/skeletons";
import PartnersList from "@/app/ui/partners/PartnersList";

const PartnersSection = async () => {
  const partnersData = await fetchPartners();
  if (!partnersData.length) return null;
  return (
    <>
      <h2 className="my-12 text-lg font-merriweather">
        Liste de nos partenaires offrant des codes promos&nbsp;:
      </h2>

      <Suspense fallback={<PartnersSkeleton />}>
        <PartnersList data={partnersData} />
      </Suspense>

      <p className="mt-12 mb-16 italic leading-relaxed">
        Les codes promos marqués d&apos;une étoile ⭐️ sont des codes affiliés,
        c&apos;est-à-dire qu&apos;ils permettent à 321 Vegan de toucher une
        petite commission sur la vente. Les utiliser permet de soutenir 321
        Vegan, merci&nbsp;!
      </p>
    </>
  );
};

export default PartnersSection;
