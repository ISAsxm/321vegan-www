import { Metadata } from "next";
import { ReactNode } from "react";
import { assets, cosmeticsSourcesData } from "@/assets/assets";
import Image from "next/image";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import LabelComparisonTable from "@/app/ui/cosmetics/LabelComparisonTable";
import JoinUsCta from "@/app/ui/components/JoinUsCta";

export const metadata: Metadata = {
  title: "Vérification de cosmétiques",
  description:
    "Trouvez des marques de cosmétiques véganes ET cruelty free grâce à l'appli 321 Vegan.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Vérification de cosmétiques
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              L&apos;appli 321 Vegan vous aide à trouver les marques de
              cosmétiques véganes ET cruelty free
            </h2>

            <div className="flex flex-col lg:flex-row mx-auto overflow-hidden">
              <div className="lg:w-1/2 flex-1">
                <Image
                  src={assets.mockupCosmetics}
                  alt="Trouvez des marques de cosmétiques véganes ET cruelty free grâce à l'appli 321 Vegan"
                  width={1080}
                  height={1920}
                  className="object-content w-auto h-auto mx-auto lg:w-full lg:mx-0 lg:-ml-8 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
              <div className="lg:p-4 p-2 lg:w-1/2 flex flex-col gap-6 flex-2 mb-12">
                <p className="md:text-justify lg:pt-12 leading-relaxed">
                  Saviez-vous qu&apos;
                  <strong>
                    écrire &laquo;&nbsp;formule vegan&nbsp;&raquo; ou
                    &laquo;&nbsp;végan&nbsp;&raquo; au sens strict signifie
                    qu&apos;il n&apos;y a pas de substances d&apos;origine
                    animale dans le produit
                  </strong>
                  , mais que cela n&apos;est d&apos;
                  <strong>
                    aucune garantie quant à l&apos;expérimentation animale
                  </strong>
                  &nbsp;?
                </p>
                <p className="text-justify leading-relaxed">
                  <strong>
                    Les tests sur les animaux sont interdits dans l&apos;UE
                    depuis 2004 pour les produits finis tels que les produits
                    cosmétiques et depuis 2009 pour les ingrédients qui les
                    composent
                  </strong>
                  , cependant,{" "}
                  <strong>
                    la confusion et la suspicion des consommateurs et
                    consommatrices restent pourtant vives
                  </strong>
                  , car{" "}
                  <strong>
                    il existe bien des exceptions qui ne sont pas concernées par
                    cette interdiction
                  </strong>
                  .
                </p>
                <p className="text-justify leading-relaxed">
                  De par ces exceptions,{" "}
                  <strong>
                    les substances qui ne sont pas uniquement à usage cosmétique
                    peuvent tout à fait être testées sur les animaux
                  </strong>
                  , de plus,{" "}
                  <strong>
                    de nombreuses marques commercialisent leurs produits dans
                    des pays où les tests sur les animaux sont légion
                  </strong>{" "}
                  pour les cosmétiques.
                </p>
                <p className="text-justify leading-relaxed">
                  L&apos;appli{" "}
                  <strong>
                    321 Vegan vous aide à trouver les marques de cosmétiques
                    véganes ET cruelty free
                  </strong>
                  , afin que vous puissiez{" "}
                  <strong>
                    choisir une marque éthique en toute conscience
                  </strong>
                  .
                </p>
              </div>
            </div>
          </section>

          <section>
            <AppStoresCta
              bgColor="bg-brand-50"
              titleColor="text-brand-600"
              textColor="text-brand-900"
            />
          </section>

          <article id="cosmetics-labels">
            <h2 className="mt-16 mb-12 text-lg font-merriweather">
              Comparatif des labels vegan et cruelty free pour les
              cosmétiques&nbsp;:
            </h2>

            <p className="md:text-justify text-balance mb-4 leading-relaxed">
              <strong>
                Un produit labellisé Vegan n&apos;est pas forcément cruelty free
              </strong>{" "}
              et c&apos;est aussi valable dans l&apos;autre sens&nbsp;:{" "}
              <strong>
                un produit certifié Cruelty Free n&apos;est pas forcément exempt
                de produits d&apos;origine animale
              </strong>
              .{" "}
              <strong>
                Les labels vegan portent avant tout sur la composition
              </strong>
              , tandis que{" "}
              <strong>
                les labels cruelty free s&apos;attachent avant tout à garantir
                l&apos;absence de tests sur animaux
              </strong>
              .
            </p>
            <p className="md:text-justify text-balance mb-4 leading-relaxed">
              Dans l&apos;état du droit européen actuel,{" "}
              <strong>
                il est impossible de s&apos;assurer que les produits ne
                proviennent pas de marques procédant à des tests sur animaux
              </strong>
              , qu&apos;il s&apos;agisse de{" "}
              <strong>
                tester les composants de cosmétiques commercialisés en UE
              </strong>
              , ou{" "}
              <strong>les cosmétiques finis testés à l&apos;étranger</strong>,
              les exceptions à la loi sont nombreuses et bien dissimulées par
              les marques.
            </p>
            <p className="md:text-justify text-balance mb-4 leading-relaxed">
              Pour pallier ce manque de transparence,{" "}
              <strong>
                certaines ONG ont créé des labels afin d&apos;informer les
                consommateurs et consommatrices sur l&apos;impact en matière de
                bien-être animal des produits qu&apos;ils ou elles achètent
              </strong>
              .{" "}
              <strong>
                Les labels vegan ou cruelty free se multiplient mais tous ne se
                valent pas
              </strong>
              , chacun ayant ses propres critères et son propre cahier des
              charges&nbsp;:{" "}
              <strong>
                certains labels offrent des garanties plus fortes grâce à des
                audits de contrôle
              </strong>
              , quand d&apos;autres se reposent sur les déclarations de la
              marque.
            </p>
            <p className="md:text-justify text-balance mb-4 leading-relaxed">
              Notons également que{" "}
              <strong>
                les labels vegan ou cruelty-free ne donnent aucune information
                concernant l&apos;affiliation de la marque
              </strong>
              , par exemple{" "}
              <strong>
                certaines marques ne pratiquent pas de tests sur les animaux
                mais elles ont été rachetées par des marques cautionnant la
                vivisection
              </strong>
              , et que{" "}
              <strong>
                la plupart des labels vegan ou cruelty-free ne concernent que le
                produit labellisé et non la marque
              </strong>
              , il faut donc constamment{" "}
              <strong>
                faire attention aux compositions et aux labels présents sur
                l&apos;emballage du produit
              </strong>
              .
            </p>
            <p className="md:text-justify text-balance mb-4 leading-relaxed">
              <strong>
                Il n&apos;est pas simple pour le consommateur ou la
                consommatrice de se repérer parmi tous ces labels
              </strong>
              , c&apos;est pourquoi{" "}
              <strong>
                321 Vegan a réalisé pour vous ce tableau récapitulatif des
                garanties offertes par les principaux labels vegan et labels
                cruelty free
              </strong>
              , en plus de{" "}
              <strong>
                la fonctionnalité « Recherche de marques de cosmétiques véganes
                et cruelty free » de l&apos;appli mobile
              </strong>
              .
            </p>
            <p className="md:text-justify text-balance mb-16 leading-relaxed">
              Et{" "}
              <strong>
                pour vous aider à choisir une marque en toute conscience, 321
                Vegan fera toujours en sorte de donner des informations aussi
                fiables que possible
              </strong>
              . Notamment{" "}
              <strong>
                en contactant les marques lorsqu&apos;il y a un doute&nbsp;!
              </strong>
            </p>

            <LabelComparisonTable />

            <p className="my-16 text-xs leading-relaxed text-gray-600 italic">
              Sources&nbsp;:{" "}
              {cosmeticsSourcesData
                .map<ReactNode>((url, index) => (
                  <a
                    key={`source-link-${index}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b"
                  >
                    {url}
                  </a>
                ))
                .reduce((prev, curr) => [prev, ", ", curr])}
            </p>
          </article>

          <section>
            <JoinUsCta
              bgColor="bg-brand-50"
              titleColor="text-brand-600"
              textColor="text-brand-900"
              btnColor="bg-brand-600 after:bg-brand-600"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

