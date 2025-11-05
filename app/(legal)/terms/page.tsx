import { Metadata } from "next";
import { owner } from "@/assets/assets";
import { Mail } from "lucide-react";
import Link from "next/link";
import Admonition from "@/app/ui/components/Admonition";
import ObfuscateEmailAddress from "@/app/ui/components/ObfuscateEmailAddress";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <header>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Mentions légales
            </h1>
          </header>
          <main>
            <section className="mb-8" id="terms">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                1. Édition du site
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  En vertu de{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000801164#LEGIARTI000042038977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-current/60"
                  >
                    l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
                  </a>{" "}
                  pour la confiance dans l&apos;économie numérique, il est
                  précisé aux utilisateur&middot;ice&middot;s du site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>{" "}
                  (ci-après le{" "}
                  <span className="font-bold">
                    &laquo;&nbsp;Site&nbsp;&raquo;
                  </span>
                  ) l&apos;identité des différents intervenants dans le cadre de
                  sa réalisation et de son suivi&nbsp;:
                </p>
                <dl className="grid grid-cols-[1fr/auto_auto]">
                  <dt className="font-semibold">Propriétaire&nbsp;:</dt>
                  <dd>
                    {owner.name} &mdash; {owner.address}
                  </dd>

                  <dt className="font-semibold">Créateur&nbsp;:</dt>
                  <dd>
                    {owner.name} &mdash;{" "}
                    <span className="font-bold text-nowrap">
                      {owner.website}
                    </span>
                  </dd>
                  <dt className="font-semibold">
                    Responsable de la publication&nbsp;:
                  </dt>
                  <dd>
                    {owner.name} &mdash;{" "}
                    <ObfuscateEmailAddress className="whitespace-nowrap" />
                  </dd>
                  <dt className="font-semibold">Hébergeur&nbsp;:</dt>
                  <dd>{owner.webhosting}</dd>
                  <dt className="font-semibold">Crédits&nbsp;:</dt>
                  <dd>
                    <p>
                      Le modèle de mentions légales est offert par{" "}
                      <a
                        href="https://la-webeuse.com/generateur-mentions-legales"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-current/60"
                      >
                        La Webeuse
                      </a>
                    </p>
                  </dd>
                </dl>
              </div>
            </section>
            <section className="mb-8" id="terms">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                2. Propriété intellectuelle et contrefaçons
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  {owner.name} est propriétaire des droits de propriété
                  intellectuelle et détient les droits d’usage sur tous les
                  éléments accessibles sur le{" "}
                  <span className="font-bold">Site</span>, notamment les textes,
                  images, graphismes, logos, vidéos, architecture, icônes et
                  sons.
                </p>
                <p className="mb-2">
                  Toute reproduction, représentation, modification, publication,
                  adaptation de tout ou partie des éléments du{" "}
                  <span className="font-bold">Site</span>, quel que soit le
                  moyen ou le procédé utilisé, est interdite, sauf autorisation
                  écrite préalable de {owner.name}.
                </p>
                <Admonition variant="yellow">
                  <p className="text-sm">
                    Toute exploitation non autorisée du{" "}
                    <span className="font-bold">Site</span> ou d’un quelconque
                    des éléments qu’il contient sera considérée comme
                    constitutive d’une contrefaçon et poursuivie conformément
                    aux dispositions des articles{" "}
                    <a
                      href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000032655082&cidTexte=LEGITEXT000006069414&dateTexte=20160605"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-current/60"
                    >
                      L.335-2 et suivants du Code de Propriété Intellectuelle
                    </a>
                    .
                  </p>
                </Admonition>
              </div>
            </section>
            <section className="mb-8" id="terms">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                3. Limitations de responsabilité
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  {owner.name} ne pourra être tenu pour responsable des dommages
                  directs et indirects causés au matériel de
                  l’utilisateur&middot;ice, lors de l’accès au site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>
                  .
                </p>
                <p>
                  {owner.name} décline toute responsabilité quant à
                  l’utilisation qui pourrait être faite des informations et
                  contenus présents sur{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>
                  .
                </p>
                <p>
                  {owner.name} s’engage à sécuriser au mieux le site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>
                  , cependant sa responsabilité ne pourra être mise en cause si
                  des données indésirables sont importées et installées sur son
                  site à son insu.
                </p>
                <p className="mb-2">
                  Des espaces interactifs (espace contact ou commentaires) sont
                  à la disposition des utilisateur&middot;ice&middot;s.{" "}
                  {owner.name} se réserve le droit de supprimer, sans mise en
                  demeure préalable, tout contenu déposé dans cet espace qui
                  contreviendrait à la législation applicable en France, en
                  particulier aux dispositions relatives à la protection des
                  données.
                </p>
                <Admonition variant="yellow">
                  <p className="text-sm">
                    Le cas échéant, {owner.name} se réserve également la
                    possibilité de mettre en cause la responsabilité civile
                    et/ou pénale de l’utilisateur&middot;ice, notamment en cas
                    de message à caractère raciste, injurieux, diffamant, ou
                    pornographique, quel que soit le support utilisé (texte,
                    photographie, etc.).
                  </p>
                </Admonition>
              </div>
            </section>
            <section className="mb-8" id="terms">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                4. CNIL et gestion des données personnelles
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Conformément aux dispositions de{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000886460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-current/60"
                  >
                    la loi 78-17 du 6 janvier 1978 modifiée
                  </a>
                  , l’utilisateur&middot;ice du site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>{" "}
                  dispose d’un droit d’accès, de modification et de suppression
                  des informations collectées.
                </p>
                <div className="bg-gray-50 rounded-lg my-2 p-6 flex flex-col sm:flex-row items-center sm:justify-between">
                  <p className="text-gray-600">
                    Pour exercer ce droit, envoyez un courriel à cette
                    adresse&nbsp;:
                  </p>
                  <span className="inline-flex items-center text-blue-600 hover:text-blue-500">
                    <Mail className="size-5 mr-1" strokeWidth={1} />
                    <ObfuscateEmailAddress className="whitespace-nowrap" />
                  </span>
                </div>
                <p>
                  Pour plus d&apos;informations sur la façon dont sont traité
                  vos données (type de données, finalité, destinataire, etc.),
                  lisez la{" "}
                  <Link
                    href="/politique-de-confidentialite"
                    className="border-b border-current/60"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </section>
            <section className="mb-8" id="terms">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                5. Liens hypertextes et cookies
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Le site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>{" "}
                  contient des liens hypertextes vers d’autres sites et dégage
                  toute responsabilité à propos de ces liens externes ou des
                  liens créés par d’autres sites vers{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>
                  .
                </p>
                <p>
                  La navigation sur le site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>{" "}
                  est susceptible de provoquer l’installation de cookie(s) sur
                  l’ordinateur de l’utilisateur&middot;ice. Un
                  &laquo;&nbsp;cookie&nbsp;&raquo; est un fichier de petite
                  taille qui enregistre des informations relatives à la
                  navigation d’un·e utilisateur&middot;ice sur un site. Les
                  données ainsi obtenues permettent d&apos;obtenir des mesures
                  de fréquentation, par exemple.
                </p>
                <p>
                  Vous avez la possibilité d’accepter ou de refuser les cookies
                  en modifiant les paramètres de votre navigateur. Aucun cookie
                  ne sera déposé sans votre consentement. Les cookies sont
                  enregistrés pour une durée maximale de mois.
                </p>
                <p>
                  Pour plus d&apos;informations sur la façon dont {owner.name}{" "}
                  fait usage des cookies, lisez sa{" "}
                  <Link
                    href="/politique-de-confidentialite"
                    className="border-b border-current/60"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </section>
            <section className="mb-8" id="terms">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                6. Droit applicable et attribution de juridiction
              </h2>
              <div className="prose text-gray-600 mb-5 leading-relaxed">
                <p>
                  Tout litige en relation avec l’utilisation du site{" "}
                  <span className="font-bold text-nowrap">{owner.website}</span>{" "}
                  est soumis au droit français. En dehors des cas où la loi ne
                  le permet pas, il est fait attribution exclusive de
                  juridiction aux tribunaux compétents de Paris.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
