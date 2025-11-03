import { Metadata } from "next";
import Link from "next/link";
import { owner } from "@/assets/assets";
import Admonition from "@/app/ui/components/Admonition";
import { Check, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <header>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Politique de confidentialité
            </h1>
          </header>

          <main>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                1. Préambule
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  La présente politique de confidentialité a pour but d’informer
                  les utilisateur&middot;ice&middot;s du site de type
                  blog/portfolio{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>
                  &nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2">
                  <ul className="space-y-4 text-gray-600 leading-relaxed">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Sur la manière dont sont collectées leurs données
                        personnelles. Sont considérées comme des données
                        personnelles, toute information permettant d’identifier
                        un·e utilisateur&middot;ice. À ce titre, il peut
                        s’agir&nbsp;: de ses noms et prénoms, de son âge, de son
                        adresse postale ou email, de sa localisation ou encore
                        de son adresse IP (liste non-exhaustive)&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Sur les droits dont ils disposent concernant ces
                        données&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Sur la personne responsable du traitement des données à
                        caractère personnel collectées et traitées&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Sur les destinataires de ces données personnelles&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Sur la politique du site en matière de cookies.
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed">
                  Cette politique complète les mentions légales consultables par
                  les utilisateur&middot;ice&middot;s à l’adresse
                  suivante&nbsp;:{" "}
                  <Link
                    href="/mentions-legales"
                    className="border-b border-current/60 text-nowrap"
                  >
                    {`${owner.website}/mentions-legales`}
                  </Link>
                </p>
              </div>
            </section>

            <section className="mb-8" id="privacy-policy">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                2. Principes relatifs à la collecte et au traitement des données
                personnelles
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Conformément à{" "}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32016R0679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-current/60"
                  >
                    l’article 5 du Règlement européen 2016/679
                  </a>
                  , les données à caractère personnel sont&nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2 leading-relaxed">
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Traitées de manière licite, loyale et transparente au
                        regard de la personne concernée&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Collectées pour des finalités déterminées (cf. Article
                        4.2 des présentes), explicites et légitimes, et ne pas
                        être traitées ultérieurement d&apos;une manière
                        incompatible avec ces finalités&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Adéquates, pertinentes et limitées à ce qui est
                        nécessaire au regard des finalités pour lesquelles elles
                        sont traitées&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Exactes et, si nécessaire, tenues à jour. Toutes les
                        mesures raisonnables doivent être prises pour que les
                        données à caractère personnel qui sont inexactes, eu
                        égard aux finalités pour lesquelles elles sont traitées,
                        soient effacées ou rectifiées sans tarder&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Conservées sous une forme permettant
                        l&apos;identification des personnes concernées pendant
                        une durée n&apos;excédant pas celle nécessaire au regard
                        des finalités pour lesquelles elles sont traitées&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Traitées de façon à garantir une sécurité appropriée des
                        données collectées, y compris la protection contre le
                        traitement non autorisé ou illicite et contre la perte,
                        la destruction ou les dégâts d&apos;origine
                        accidentelle, à l&apos;aide de mesures techniques ou
                        organisationnelles appropriées.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Le traitement n&apos;est licite que si, et dans la mesure où,
                  au moins une des conditions suivantes est remplie&nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2 leading-relaxed">
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        La personne concernée a consenti au traitement de ses
                        données à caractère personnel pour une ou plusieurs
                        finalités spécifiques&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Le traitement est nécessaire à l&apos;exécution
                        d&apos;un contrat auquel la personne concernée est
                        partie ou à l&apos;exécution de mesures
                        précontractuelles prises à la demande de celle-ci&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Le traitement est nécessaire au respect d&apos;une
                        obligation légale à laquelle le responsable du
                        traitement est soumis&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Le traitement est nécessaire à la sauvegarde des
                        intérêts vitaux de la personne concernée ou d&apos;une
                        autre personne physique&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Le traitement est nécessaire à l&apos;exécution
                        d&apos;une mission d&apos;intérêt public ou relevant de
                        l&apos;exercice de l&apos;autorité publique dont est
                        investi le responsable du traitement&nbsp;;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Le traitement est nécessaire aux fins des intérêts
                        légitimes poursuivis par le responsable du traitement ou
                        par un tiers, à moins que ne prévalent les intérêts ou
                        les libertés et droits fondamentaux de la personne
                        concernée qui exigent une protection des données à
                        caractère personnel, notamment lorsque la personne
                        concernée est un enfant.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                3. Consentement
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Les utilisateur&middot;ice&middot;s conviennent qu&apos;en
                  utilisant le site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>
                  , iels acceptent les conditions énoncées dans la présente
                  politique de confidentialité et la collecte,
                  l&apos;utilisation et la conservation des données énumérées
                  dans la présente politique.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                4. Données à caractère personnel collectées et traitées dans le
                cadre de la navigation sur le site
              </h2>
              <div className="prose text-gray-600 mb-5">
                <h3 className="text-lg text-gray-800 mb-4">
                  4.1 Données collectées
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Données collectées automatiquement
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {owner.name} ne collecte aucune donnée automatiquement.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Données collectées de façon non automatique
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Les données personnelles collectées lorsque vous effectuez
                      certaines fonctions sur le site{" "}
                      <span className="font-bold text-nowrap">
                        {owner.website}
                      </span>{" "}
                      sont les suivantes&nbsp;: vos{" "}
                      <span className="font-bold">nom</span>,{" "}
                      <span className="font-bold">prénom</span> et{" "}
                      <span className="font-bold">adresse électronique</span>.
                    </p>
                    <p className="leading-relaxed">
                      Ces données peuvent être receuillies au moyen de la
                      méthode suivante&nbsp;:{" "}
                      <span className="font-bold">Formulaire de contact</span>
                    </p>
                  </div>
                </div>
                <div className="my-4">
                  <Admonition variant="indigo">
                    <p className="text-sm leading-relaxed">
                      Veuillez noter que {owner.name} ne collecte que les
                      données qui l&apos;aident à atteindre l&apos;objectif
                      annoncé dans cette politique de confidentialité.{" "}
                      {owner.name} ne recueille pas de données supplémentaires
                      sans vous en informer au préalable.
                    </p>
                  </Admonition>
                </div>
              </div>
              <div className="prose text-gray-600 mb-5">
                <h3 className="text-lg text-gray-800 mb-4">
                  4.2 Comment sont utilisées les données personnelles
                  collectées&nbsp;?
                </h3>
                <p className="leading-relaxed">
                  Les données personnelles recuillies sur le site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>{" "}
                  seront utilisées uniquement aux fins précisées dans la
                  présente politique ou indiquées sur les pages pertinentes du
                  site. {owner.name} n&apos;utilisera pas vos données au-delà de
                  ce que {owner.name} vous divulguera.
                </p>
                <p className="leading-relaxed">
                  Les données que {owner.name} recueille lorsque
                  l&apos;utilisateur&middot;ice exécute certaines fonctions sur
                  le site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>{" "}
                  peuvent être utilisées à la finalité suivante&nbsp;:{" "}
                  <span className="font-bold">Communication</span>
                </p>
              </div>
              <div className="prose text-gray-600 mb-5">
                <h3 className="text-lg text-gray-800 mb-4">
                  4.3 Avec qui sont partagées les données personnelles
                  collectées&nbsp;?
                </h3>
                <h4 className="font-medium text-gray-900 mb-2">
                  Tierces parties
                </h4>
                <p className="leading-relaxed">
                  Les tiers ne seront pas en mesure d&apos;accéder aux données
                  des utilisateur&middot;ice&middot;s au-delà de ce qui est
                  raisonnablement nécéssaire pour atteindre l&apos;objectif
                  donné.
                </p>
                <h4 className="font-medium text-gray-900 mb-2">
                  Autres divulgations
                </h4>
                <p className="leading-relaxed">
                  {owner.name} s&apos;engage à ne pas vendre ou partager vos
                  données avec des tiers, sauf dans les cas suivants&nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2 leading-relaxed">
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>Si la loi l&apos;exige</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        Si elle est requise pour toute procédure judiciaire
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>
                        pour prouver ou protéger les droits légaux de{" "}
                        {owner.name}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="my-2">
                  <Admonition variant="indigo">
                    <p className="text-sm leading-relaxed">
                      Si vous consultez des hyperliens du site vers un autre
                      site, veuillez noter que {owner.name} n&apos;est pas
                      responsable et n&apos;a pas de contrôle sur leurs
                      politiques et pratiques de confidentialité.
                    </p>
                  </Admonition>
                </div>
              </div>

              <div className="prose text-gray-600 mb-5">
                <h3 className="text-lg text-gray-800 mb-4">
                  4.4 Combien de temps sont conservées les données personnelles
                  collectées&nbsp;?
                </h3>
                <p className="leading-relaxed">
                  Les données personnelles sont conservées aussi longtemps que
                  nécessaire pour les fins pour lesquelles elles ont été
                  collectées, ou pour se conformer aux obligations légales de{" "}
                  {owner.name}. Une fois cette durée écoulée, les données seront
                  supprimées de manière sécurisée.
                </p>
              </div>

              <div className="prose text-gray-600 mb-5">
                <h3 className="text-lg text-gray-800 mb-4">
                  4.5 Comment sont protégées les données personnelles&nbsp;?
                </h3>
                <p className="leading-relaxed">
                  Toutes les informations sensibles sont chiffrées à l&apos;aide
                  de technologies robustes. Lorsque vous vous connectez à{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>
                  , vos données sont transmises via une connexion sécurisée
                  (HTTPS), garantissant qu&apos;elles sont protégées contre
                  toute interception ou manipulation.
                </p>
                <p className="leading-relaxed">
                  Bien que {owner.name} prenne toutes les précautions
                  raisonnables pour sécuriser les données de ses
                  utilisateur&middot;ice&middot;s et garantir leur protection,
                  il subsiste toujours un certain risque. L&apos;Internet dans
                  son ensemble peut parfois présenter des vulnérabilités, et il
                  est donc impossible à {owner.name} d&apos;assurer une sécurité
                  absolue des données des utilisateur&middot;ice&middot;s
                  au-delà de ce qui est raisonnablement réalisable.
                </p>
                <p className="leading-relaxed">
                  En cas de violation de la sécurité affectant vos
                  renseignements personnels, {owner.name} vous en informera
                  conformément aux obligations légales et prendra les mesures
                  nécessaires pour en limiter les risques.
                </p>
              </div>

              <div className="prose text-gray-600 mb-5">
                <h3 className="text-lg text-gray-800 mb-4">4.6 Mineurs</h3>
                <p className="leading-relaxed">
                  Le RGPD pécise que les personnes de moins de 15 ans sont
                  considérées comme des mineurs aux fins de la collecte de
                  données. Les mineurs doivent avoir le consentement d&apos;un
                  représentant légal pour que leur données soient recuillies,
                  traitées et utilisées.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                5. Vos droits en tant qu&apos;utilisateur&middot;ice
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  En vertu du RGPD, les utilisateur&middot;ice&middot;s ont les
                  droits suivants sur leurs données en tant que personnes
                  concernées&nbsp;:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-2 leading-relaxed">
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>Droit d&apos;accès&nbsp;;</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>Droit de rectification&nbsp;;</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>Droit à l&apos;effacement&nbsp;;</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>Droit de restreindre le traitement&nbsp;;</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>Droit à la portabilité des données&nbsp;;</span>
                    </li>
                    <li className="flex gap-3">
                      <Check
                        className="size-6 text-blue-500 shrink-0"
                        strokeWidth={1}
                      />
                      <span>Droit d&apos;objection.</span>
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed">
                  Vous trouverez de plus amples informations concernant ces
                  droits sur le site de la{" "}
                  <a
                    href="https://www.cnil.fr/fr/cookies-et-traceurs-que-dit-la-loi#c5577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-current/60"
                  >
                    CNILL
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                6. Comment modifier, supprimer ou contester les données
                recuillies&nbsp;?
              </h2>
              <div className="bg-gray-50 rounded-lg my-2 p-6 flex flex-col sm:flex-row items-center sm:gap-6 leading-relaxed">
                <p className="text-gray-600">
                  Si vous souhaitez que vos renseignements soient supprimés ou
                  modifiés d&apos;une façon ou d&apos;une autre, veuillez
                  envoyer un courriel à cette adresse&nbsp;:
                </p>
                <span className="inline-flex items-center text-blue-600 hover:text-blue-500">
                  <Mail className="h-5 w-5 mr-1" strokeWidth={1} />
                  <span className="obfuscate">{owner.email}</span>
                </span>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                7. Politique sur les cookies
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Un cookie est un petit fichier stocké sur le disque dur
                  d&apos;un·e utilisateur&middot;ice par un site. Il permet de
                  collecter des données concernant les habitudes de navigation
                  et les interactions de l&apos;utilisateur&middot;ice avec le
                  site.
                </p>
                <p>
                  {owner.name} utilise les types de cookies suivants sur son
                  site&nbsp;:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Cookies fonctionnels
                    </h3>
                    <p className="text-gray-600">
                      {owner.name} les utilise pour mémoriser toutes les
                      sélections que vous faites sur son site afin qu&apos;elles
                      soient sauvegardées pour vos prochaines visites.
                    </p>
                  </div>
                </div>
                <p>
                  Vous pouvez choisir d&apos;être averti chaque fois qu&apos;un
                  cookie est transmis ou de désactiver complètement les cookies
                  en modifiant les parmètres de votre navigateur Web. Cependant,
                  veuillez noter que cela pourrait affecter certaines
                  fonctionnalités du site et diminuer la qualité de votre
                  expérience utilisateur&middot;ice.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                8. Modifications
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Cette politique de confidentialité peut être modifiée à tout
                  moment afin de maintenir la conformité avec la loi et de tenir
                  compte de tout changement dans le processus de collecte des
                  données. {owner.name} recommande à ses
                  utilisateur&middot;ice&middot;s de vérifier régulièrement sa
                  politique de confidentialité pour s&apos;assurer qu&apos;iels
                  soient informé·e·s de toute mise à jour. Au besoin,{" "}
                  {owner.name}
                  peut informer les utilisateur&middot;ice&middot;s par courriel
                  des changements apportés à cette politique.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                4. Contact
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:justify-between leading-relaxed">
                <p className="text-gray-600">
                  Des questions sur les conditions d&apos;utilisation&nbsp;?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 border-b border-current/60"
                >
                  <Mail className="size-5 mr-1" strokeWidth={1} />
                  Contactez {owner.name}
                </Link>
              </div>
            </section>
          </main>
          <footer className="prose text-gray-600 mt-8 mb-5 leading-relaxed">
            <p className="flex items-center gap-2">
              <span className="italic">
                Date d&apos;entrée en vigeur de la présente politique&nbsp;:
              </span>
              <span>le 23 octobre 2025</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
