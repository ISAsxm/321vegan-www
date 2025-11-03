import {
  MotionH2,
  MotionH3,
  MotionP,
  MotionDiv,
  MotionSection,
} from "@/app/ui/components/Motions";
import Testimonials from "@/app/ui/home/Testimonials";
import AppStoresCta from "@/app/ui/components/AppStoresCta";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden pt-16 pb-32 space-y-24 w-full px-[12%] bg-brand-50 scroll-mt-20"
    >
      <MotionH2
        className="text-center mb-2 text-lg text-brand-600 font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Ce que les utilisateur&middot;ices pensent de 321 Vegan
      </MotionH2>
      <MotionH3
        className="text-center text-5xl text-brand-900 font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Témoignages
      </MotionH3>

      <MotionP
        className="text-center max-w-2xl mx-auto my-12 text-lg leading-relaxed text-brand-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Découvrez{" "}
        <strong>
          ce que les utilisatrices et utilisateurs pensent de l&apos;application
          mobile 321 Vegan
        </strong>{" "}
        au travers de leurs témoignages.
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Testimonials />
      </MotionDiv>

      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <AppStoresCta wrapperClass="mt-16" />
      </MotionSection>
    </section>
  );
};

export default TestimonialSection;
