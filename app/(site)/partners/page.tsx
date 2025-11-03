import { Metadata } from "next";
import { assets } from "@/assets/assets";
import Image from "next/image";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import ContactUsCta from "@/app/ui/components/ContactUsCta";
import PartnersList from "@/app/ui/partners/PartnersList";

export const metadata: Metadata = {
  title: "Nos partenaires",
  description:
    "Avec les codes promos de nos partenaires, vous bénéficiez de réductions lors de vos achats dans leurs boutiques en ligne de nos partenaires.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Les partenaires de 321 Vegan
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Des réductions auprès de nos partenaires pour vous faire du bien
              tout en faisant le bien.
            </h2>
            <div className="flex flex-col lg:flex-row mx-auto overflow-hidden">
              <div className="lg:w-1/2 flex-1">
                <Image
                  src={assets.mockupPartners}
                  alt="Bénéficiez de réductions auprès de nos partenaires"
                  width={1080}
                  height={1920}
                  className="object-content w-auto h-auto mx-auto lg:w-full lg:mx-0 lg:-ml-8 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
              <div className="lg:p-4 p-2 lg:w-1/2 flex flex-col gap-6 flex-2 mb-12">
                <p className="text-justify lg:pt-12 leading-relaxed">
                  321 Vegan s&apos;associe avec{" "}
                  <strong>
                    des boutiques en ligne de produits, vêtements, accessoires
                    et cosmétiques véganes
                  </strong>{" "}
                  afin de vous faire{" "}
                  <strong>bénéficier de réductions lors de vos achats</strong>.
                </p>
                <p className="text-justify leading-relaxed">
                  <strong>Certains codes promotionnels sont affiliés</strong>,
                  c&apos;est-à-dire qu&apos;ils permettent à 321 Vegan de
                  toucher une petite commission sur la vente.{" "}
                  <strong>
                    Ils sont facilement reconnaissable sur l&apos;appli grâce à
                    une icône étoile
                  </strong>{" "}
                  à droite du nom de l&apos;entreprise.
                  <br />
                  <strong>
                    Les utiliser permet de soutenir 321 Vegan, merci&nbsp;!
                  </strong>
                </p>
                <section className="lg:mt-auto">
                  <AppStoresCta
                    bgColor="bg-brand-50"
                    titleColor="text-brand-600"
                    textColor="text-brand-900"
                  />
                </section>
              </div>
            </div>
          </section>

          <section>
            <h2 className="my-12 text-lg font-merriweather">
              Liste de nos partenaires offrant des codes de réductions&nbsp;:
            </h2>

            <PartnersList />

            <p className="mt-12 mb-16 italic leading-relaxed">
              Les codes promos marqués d&apos;une étoile ⭐️ sont des codes
              affiliés, c&apos;est-à-dire qu&apos;ils permettent à 321 Vegan de
              toucher une petite commission sur la vente. Les utiliser permet de
              soutenir 321 Vegan, merci&nbsp;!
            </p>
          </section>

          <section>
            <ContactUsCta
              title="Vous souhaitez devenir partenaire&nbsp;?"
              btnColor="bg-brand-600 after:bg-brand-600"
            >
              Contactez-nous pour rejoindre notre listes de partenaires et faire
              bénéficiez d&apos;avantages à la communauté.
            </ContactUsCta>
          </section>
        </main>
      </div>
    </div>
  );
}
