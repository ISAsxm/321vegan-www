import {
  MotionH2,
  MotionH3,
  MotionP,
  MotionSection,
} from "@/app/ui/components/Motions";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import Features from "@/app/ui/home/Features";

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-brand-900 pt-16 pb-32 space-y-24 w-full px-[12%] scroll-mt-20"
    >
      <MotionH2
        className="text-center mb-2 text-lg text-white/90 font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Nos services
      </MotionH2>
      <MotionH3
        className="text-center text-5xl text-white font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Simplifiez-vous la vie
      </MotionH3>

      <MotionP
        className="text-center max-w-2xl mx-auto my-12 text-lg leading-relaxed text-white/90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        L&apos;appli{" "}
        <strong>321 Vegan vous aide à trouver des produits véganes</strong> lors
        de vos courses.
        <strong>
          {" "}
          Scannez le code-barres d&apos;un produit pour savoir s&apos;il est
          végane ou non
        </strong>
        , même sans connexion internet.
      </MotionP>

      <Features />

      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <AppStoresCta
          bgColor="bg-brand-100"
          titleColor="text-brand-900"
          textColor="text-brand-600"
          wrapperClass="mt-16"
        />
      </MotionSection>
    </section>
  );
};

export default FeatureSection;
