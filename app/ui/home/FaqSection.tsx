import {
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionP,
  MotionSection,
} from "@/app/ui/components/Motions";
import Faqs from "@/app/ui/home/Faqs";
import ContactUsCta from "@/app/ui/components/ContactUsCta";

const FaqSection = () => {
  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-brand-900 pt-16 pb-32 space-y-24 w-full px-[12%] scroll-mt-20"
    >
      <MotionH2
        className="text-center mb-2 text-lg text-white/90 font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Réponses aux questions courantes
      </MotionH2>
      <MotionH3
        className="text-center text-5xl text-white font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        FAQs
      </MotionH3>

      <MotionP
        className="text-center max-w-2xl mx-auto my-12 text-lg leading-relaxed text-white/90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Trouvez les réponses aux questions les plus courantes sur nos services.
        Nous restons bien entendu disponible pour tous compléments
        d&apos;informations.
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Faqs />
      </MotionDiv>

      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <ContactUsCta wrapperClass="mt-16" />
      </MotionSection>
    </section>
  );
};

export default FaqSection;
