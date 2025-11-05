import {
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionP,
  MotionSection,
} from "@/app/ui/components/Motions";
import JoinUsCta from "@/app/ui/components/JoinUsCta";
import Contributions from "@/app/ui/home/Contributions";

const ContributionSection = () => {
  return (
    <section
      id="contributions"
      className="w-full pt-16 pb-32 space-y-24 px-[12%] scroll-mt-20"
    >
      <MotionH2
        className="text-center mb-2 text-lg text-brand-500 font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Un projet collaboratif
      </MotionH2>
      <MotionH3
        className="text-center text-5xl text-brand-600 font-merriweather"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Rejoignez la communauté
      </MotionH3>

      <MotionP
        className="text-center max-w-2xl mx-auto my-12 text-lg leading-relaxed text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Rejoignez la{" "}
        <strong>communauté de contributrices et contributeurs</strong> afin
        d&apos;
        <strong>aider à rendre le véganisme facile pour tout le monde</strong>.
        Voici{" "}
        <strong>
          quelques exemples de contibutions que vous pouvez apporter
        </strong>
        , sans obligations ni pressions, selon vos disponibilités et moyen.
      </MotionP>

      <MotionDiv
        className="grid grid-cols-auto gap-6 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Contributions />
      </MotionDiv>

      <MotionSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <JoinUsCta wrapperClass="mt-16" />
      </MotionSection>
    </section>
  );
};

export default ContributionSection;
