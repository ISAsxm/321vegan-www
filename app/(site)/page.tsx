import Header from "@/app/ui/home/Header";
import FeatureSection from "@/app/ui/home/FeatureSection";
import ContributionSection from "@/app/ui/home/ContributionSection";
import TestimonialSection from "@/app/ui/home/TestimonialSection";
import FaqSection from "@/app/ui/home/FaqSection";
import WaveDivider from "@/app/ui/components/WaveDivider";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <WaveDivider />
        <FeatureSection />
        <WaveDivider previousColor="bg-brand-900" nextColor="text-white" />
        <ContributionSection />
        <WaveDivider nextColor="text-brand-50" />
        <TestimonialSection />
        <WaveDivider previousColor="bg-brand-50" />
        <FaqSection />
      </main>
    </>
  );
}
