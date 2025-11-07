import { Metadata } from "next";
import { mockups } from "@/assets/assets";
import Image from "next/image";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import JoinUsCta from "@/app/ui/components/JoinUsCta";
import SourcesList from "@/app/ui/impact/SourcesList";

export const metadata: Metadata = {
  title: "Suivi d'impact",
  description:
    "Mesurez l'impact de votre véganisme sur les animaux et l’environnement grâce à notre calculatrice végane.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Suivi de votre impact
          </h1>
        </header>
        <main>
          <article>
            <h2 className="mb-12 text-lg font-merriweather">
              Estimation de l&apos;impact du véganisme sur les animaux et
              l&apos;environnement.
            </h2>

            <div className="flex flex-col lg:flex-row mx-auto overflow-hidden">
              <div className="lg:w-1/2 flex-1">
                <Image
                  src={mockups.mockupImpact}
                  alt=""
                  width={1080}
                  height={1920}
                  className="object-content w-auto h-auto mx-auto lg:w-full lg:mx-0 lg:-ml-8 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
              <div className="lg:p-4 p-2 lg:w-1/2 flex flex-col gap-6 flex-2 mb-12">
                <p className="text-justify lg:pt-12 leading-relaxed">
                  Le véganisme consiste à{" "}
                  <strong>
                    exclure autant que possible toute forme d&apos;exploitation
                    animale
                  </strong>
                  , que ce soit dans l&apos;alimentation, les vêtements, les
                  cosmétiques, ou encore les loisirs.{" "}
                  <strong>
                    Les véganes s&apos;efforcent de minimiser leur empreinte
                    écologique
                  </strong>{" "}
                  et de <strong>préserver la vie des animaux</strong>.
                </p>
                <p className="text-justify leading-relaxed">
                  L&apos;industrie de{" "}
                  <strong>
                    l&apos;élevage est l&apos;une des principales causes de la
                    déforestation
                  </strong>
                  , de la <strong>pollution des sols et des eaux</strong>, ainsi
                  que des <strong>émissions de gaz à effet de serre</strong>. En
                  choisissant de ne pas consommer de produits d&apos;origine
                  animale,{" "}
                  <strong>
                    les véganes contribuent à la réduction de l&apos;empreinte
                    carbone, à la préservation des écosystèmes et de la
                    biodiversité
                  </strong>
                  .
                </p>
                <p className="text-justify leading-relaxed">
                  Une{" "}
                  <strong>
                    alimentation végane équilibrée peut aussi réduire les
                    risques de maladies cardiovasculaires et de certains cancers
                  </strong>
                  . Mais le véganisme est surtout{" "}
                  <strong>un engagement éthique envers les animaux</strong>.
                </p>
                <p className="text-justify leading-relaxed">
                  Grâce à notre <strong>calculatrice végane</strong>, visualisez{" "}
                  <strong>combien d&apos;animaux vous avez sauvés</strong>,{" "}
                  <strong>
                    combien de CO<sub>2</sub> vous avez évité d&apos;émettre
                  </strong>
                  ,{" "}
                  <strong>
                    combien de mètres carrés de forêt ont été préservés
                  </strong>{" "}
                  et{" "}
                  <strong>
                    combien de litres d&apos;eau vous avez économisés
                  </strong>{" "}
                  depuis que vous avez adopté un mode de vie végane.
                </p>
              </div>
            </div>
          </article>

          <section className="">
            <AppStoresCta />
          </section>

          <section id="sources" className="scroll-mt-20">
            <h2 className="mt-16 mb-12 text-lg font-merriweather">
              L&apos;appli 321 Vegan vous aide à mesurer votre impact sur les
              animaux et l&apos;environnement grâce aux études suivantes&nbsp;:
            </h2>

            <SourcesList />

            <p className="mt-12 mb-16 italic leading-relaxed">
              Les chiffres que vous trouvez sur l&apos;appli sont des
              estimations basées sur ces différentes études. Ce sont des
              moyennes, destinées à fournir un ordre de grandeur.
            </p>
          </section>

          <section>
            <JoinUsCta
              bgColor="bg-brand-600"
              btnColor="bg-brand-800 after:bg-brand-800"
            />
          </section>
        </main>
      </div>
    </div>
  );
}
