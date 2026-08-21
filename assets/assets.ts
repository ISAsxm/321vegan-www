import {
  AppStoreLinksType,
  ContributionDataType,
  CosmeticsLabelDataType,
  FaqDataType,
  FeatureDataType,
  OwnerType,
  SitmapDataType,
  SocialNetworkLinksType,
  SourceDataType,
  TestimonialDataType,
  SignalConsoChecklistDataType,
  SignalConsoTemplatesDataType,
  ResourceCategoriesDataType,
  ResourcesDataType,
  MapFeaturesDataType,
} from "@/types/definitions";

import mockupAdditives from "./mockups/mockup-additives.webp";
import mockupCosmetics from "./mockups/mockup-cosmetics.webp";
import mockupImpact from "./mockups/mockup-impact.webp";
import mockupMap from "./mockups/mockup-map.webp";
import mockupPartners from "./mockups/mockup-partners.webp";
import mockupScan from "./mockups/mockup-scan.webp";
import mockupReminder from "./mockups/mockup-reminder.webp";

import chooseCF from "./labels/label-choose-cruelty-free.webp";
import eveVegan from "./labels/label-eve-vegan.webp";
import ihtk from "./labels/label-ihtk.webp";
import leapingBunny from "./labels/label-leaping-bunny.webp";
import oneVoiceC from "./labels/label-one-voice-c.webp";
import oneVoiceT from "./labels/label-one-voice-t.webp";
import petaVeganCF from "./labels/label-peta-cf-and-vegan.webp";
import petaCF from "./labels/label-peta-cruelty-free.webp";
import vLabel from "./labels/label-v-label.webp";
import veganSociety from "./labels/label-vegan-society.webp";

import anonymousForTheVoiceless from "./resources/associations/asso-anonymous-for-the-voiceless.webp";
import asmAsso from "./resources/associations/asso-animal-save-movement.webp";
import coexister from "./resources/associations/asso-coexister.webp";
import futurAsso from "./resources/associations/asso-futur.webp";
import gardiensDesFelins from "./resources/associations/asso-gardiens-des-felins.webp";
import groingroin from "./resources/associations/asso-groingroin.webp";
import L214 from "./resources/associations/asso-l214.webp";
import nosViventia from "./resources/associations/asso-nos-viventia.webp";
import paz from "./resources/associations/asso-paz.webp";
import refugeAnimaliste from "./resources/associations/asso-refuges-animalistes.webp";
import sanctopia from "./resources/associations/asso-sanctopia.webp";

import observatoireDuSpecisme from "./resources/blogs/observatoire-du-specisme.webp";
import questionsAnimalistes from "./resources/blogs/questions-animalistes.webp";
import viandeInfo from "./resources/blogs/viande-info-site.webp";

import cowspiracy from "./resources/documentaries/cowspiracy.webp";
import dominion from "./resources/documentaries/dominion.webp";
import earthlings from "./resources/documentaries/earthlings.webp";
import egoAlien from "./resources/documentaries/ego.webp";
import seaspiracy from "./resources/documentaries/seaspiracy.webp";
import theGameChangers from "./resources/documentaries/the-game-changers.webp";

import b12crew from "./resources/music/b12crew.webp";
import feldi from "./resources/music/feldi.webp";
import harambeProject from "./resources/music/harambe-project.webp";
import resTurner from "./resources/music/res-turner.webp";

import anola from "./resources/others/anola.webp";
import bernier from "./resources/others/logo-bernier.webp";
import projetMeduses from "./resources/others/pojet-meduses.webp";

import lasVeganParano from "./resources/podcasts/las-vegan-parano.webp";
import leMondeApresLeSpecisme from "./resources/podcasts/le-monde-apres-le-specisme.webp";
import manje from "./resources/podcasts/manje.webp";
import poissonPodcast from "./resources/podcasts/poisson-podcast.webp";
import pouleSentimentale from "./resources/podcasts/poule-sentimentale.webp";

import usineDuPire from "./resources/readings/couverture-usinedupire-laveilleuse.webp";
import insolenteVeggie from "./resources/readings/insolente-veggie.webp";
import lamorce from "./resources/readings/lamorce.webp";

import logoLda from "./resources/sciences/logo-lda.webp";

export const mockups = {
  mockupImpact,
  mockupPartners,
  mockupScan,
  mockupAdditives,
  mockupCosmetics,
  mockupMap,
  mockupReminder,
};

export const sitemapData: SitmapDataType[] = [
  { url: "/a-propos", label: "À propos", category: "general" },
  {
    url: "/scanner-vegan",
    label: "Scan de codes-barres",
    category: "services",
  },
  {
    url: "/verification-d-additifs",
    label: "Vérification d'additifs",
    category: "services",
  },
  {
    url: "/verification-de-cosmetiques",
    label: "Vérification de cosmétiques",
    category: "services",
  },
  { url: "/suivi-d-impact", label: "Suivi d'impact", category: "services" },
  { url: "/partenaires", label: "Partenaires", category: "services" },
  {
    url: "/carte-interactive",
    label: "Carte interactive",
    category: "services",
  },
  {
    url: "/rappel-b12",
    label: "Rappel B12",
    category: "services",
  },
  {
    url: "/outil-signalement",
    label: "Outil de signalement",
    category: "resources",
  },
  {
    url: "/kit-de-communication",
    label: "Kit de communication",
    category: "general",
  },
  { url: "/contact", label: "Contact", category: "support" },
  {
    url: "/politique-de-confidentialite",
    label: "Politique de confidentialité",
    category: "support",
  },
  { url: "/mentions-legales", label: "Mentions légales", category: "support" },
  { url: "/#faqs", label: "FAQs", category: "general" },
  { url: "/#contributions", label: "Nous rejoindre", category: "general" },
  { url: "/#testimonials", label: "Témoignages", category: "general" },
  {
    url: "/verification-d-additifs#additives",
    label: "Liste des additifs",
    category: "resources",
  },
  {
    url: "/verification-de-cosmetiques#cosmetics-labels",
    label: "Comparatif des labels",
    category: "resources",
  },
  {
    url: "/partenaires#discounts",
    label: "Codes promos",
    category: "resources",
  },
  {
    url: "/rappel-b12#vitamin-b12",
    label: "Vitamine B12",
    category: "resources",
  },
  { url: "/sources", label: "Sources", category: "resources" },
  {
    url: "/ressources",
    label: "Ressources",
    category: "resources",
  },
];

export const owner: OwnerType = {
  name: process.env.NEXT_PUBLIC_OWNER_NAME ?? "",
  email: process.env.NEXT_PUBLIC_OWNER_EMAIL ?? "",
  address: process.env.NEXT_PUBLIC_OWNER_ADDRESS ?? "",
  website: process.env.NEXT_PUBLIC_OWNER_WEBSITE ?? "",
  webhosting: process.env.NEXT_PUBLIC_OWNER_WEBHOSTING ?? "",
};

export const appStoreLinks: AppStoreLinksType = {
  apple: process.env.NEXT_PUBLIC_APPLE_LINK ?? "",
  google: process.env.NEXT_PUBLIC_GOOGLE_LINK ?? "",
};

export const socialNetworkLinks: SocialNetworkLinksType = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LINK ?? "",
  discord: process.env.NEXT_PUBLIC_DISCORD_LINK ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB_LINK ?? "",
  buymeacoffee: process.env.NEXT_PUBLIC_BUYMEACOFFE_LINK ?? "",
};

export const featuresData: FeatureDataType[] = [
  {
    title: "Scanner de codes-barres ultra-rapide",
    icon: "scan-barcode",
    bgImage: mockupScan,
    link: "/scanner-vegan",
    description:
      "<strong>Scannez les produits et obtenez des résultats immédiats</strong>, même sans connexion internet. <strong>Idéal pour vos courses, même dans les zones sans réseau&nbsp;!</strong>",
  },
  {
    title: "Vérification des additifs",
    icon: "flask-conical",
    bgImage: mockupAdditives,
    link: "/verification-d-additifs",
    description:
      "<strong>Consultez rapidement si un additif est végétalien</strong> grâce à notre base de données d'additifs.",
  },
  {
    title: "Vérification des cosmétiques",
    icon: "rabbit",
    bgImage: mockupCosmetics,
    link: "/verification-de-cosmetiques",
    description:
      "<strong>Trouvez facilement une marque de cosmétique végane ET cruelty-free</strong> grâce à notre base de données cosmétiques.",
  },
  {
    title: "Suivi de votre impact",
    icon: "activity",
    bgImage: mockupImpact,
    link: "/suivi-d-impact",
    description:
      "Visualisez <strong>combien d'animaux vous auriez consommé sans être végane</strong>, <strong>combien de CO₂ vous avez évité d'émettre</strong>, <strong>combien de mètres carrés de forêt ont été préservés</strong> et <strong>combien de litres d'eau vous avez économisés depuis que vous avez adopté un mode de vie végane</strong>.",
  },
  {
    title: "Réductions auprès de nos partenaires",
    icon: "badge-euro",
    bgImage: mockupPartners,
    link: "/partenaires",
    description:
      "Avec les codes promos, vous <strong>bénéficiez de réductions lors de vos achats dans les boutiques en ligne de nos partenaires</strong>.",
  },
  {
    title: "Carte interactive",
    icon: "map",
    bgImage: mockupMap,
    link: "/carte-interactive",
    description:
      "<strong>Trouvez facilement dans quels magasins sont vendus vos produits préférés</strong> grâce à notre carte interactive. Idéal pour les vacances et les déplacements.",
  },
  {
    title: "Rappel B12",
    icon: "pill",
    bgImage: mockupReminder,
    link: "/rappel-b12",
    description:
      "<strong>Configurez un rappel pour la prise de votre vitamine B12</strong> afin de recevoir une notification pour ne pas l'oublier&nbsp;!",
  },
];

export const contributionsData: ContributionDataType[] = [
  {
    icon: "scan-barcode",
    title: "Suggérer des produits",
    description:
      "Si un produit n'est pas encore référencé, vous pouvez suggérer son ajout pour <strong>enrichir notre base de données et aider la communauté à identifier les produits qui sont vegan</strong>.",
  },
  {
    icon: "vegan",
    title: "Vérifier les produits",
    description:
      "Pour garantir des données fiables et à jour, <strong>chaque produit est vérifié par des personnes</strong> comme vous, qui rejoignent la communauté pour contacter les marques si nécessaire.",
  },
  {
    icon: "code-xml",
    title: "Développer l'app",
    description:
      "321 Vegan est <strong>un projet open-source : tout le monde peut contribuer</strong> sur GitHub, que ce soit pour l'application mobile, ce site web ou encore l'outil de vérification des produits.",
  },
  {
    icon: "euro",
    title: "Faire un don",
    description:
      "Soutenez ce <strong>projet 100% indépendant, gratuit, sans pub et militant</strong>. Vos dons servent à couvrir les frais liés à la distribution de l'application et à son hébergement.",
  },
];

export const testimonialData: TestimonialDataType[] = [
  {
    username: "Alexandre Bdrl",
    date: "24/07/2025",
    rate: 5,
    title: "App indispensable",
    comment:
      "Appli faites et entretenue avec attention par un.e végan.e pour les végan.e.s tout ça de manière éthique et méticuleuse. Je recommande aussi pour les personnes végétariennes, fléxitariennes et curieuses ! (D’ailleurs très pratique pour mes proches non végan.e.s qui veulent acheter des produits que je pourrais manger sans se perdre dans les compositions et additifs) Super utile merci beaucoup! 🫶🏻",
  },
  {
    username: "Violette Viette",
    date: "17/10/2024",
    rate: 5,
    title: "Un banger",
    comment:
      "Un incontournable car pas de réseau dans la plupart des magasins et le fait que la base de données soit collaborative pour l’agrandir est super ! J’utilise encore plus la recherche des additifs E qui est super rapide",
  },
  {
    username: "Anawlo",
    date: "19/06/2025",
    rate: 5,
    title: "Super application",
    comment:
      "Super application ! 321 Vegan m’aide énormément à faire mes courses et à trouver des produits respectueux. J’adore voir combien d’animaux j’ai sauvé chaque matin. J’aime le format de l’application, tout est simple, pratique et compréhensible. Je recommande à 100 % cette application !",
  },
  {
    username: "Takiedu75",
    date: "21/04/2025",
    rate: 5,
    title: "Une appli au top ! 🌱",
    comment:
      "Vraiment une application incroyable qui change le quotidien des vegans, perso elle m’est d’une grande utilité quand je fais mes courses et c’est normal que tout ne soit pas encore répertorié, les usagers mettent aussi la main à la pâte pour aider à fournir des informations c’est aussi ce qui rend l’appli si intéressante je trouve 🙏🏻 Merci encore 321 Vegan 👌🏻🌱",
  },
  {
    username: "gotmullet",
    date: "01/04/2025",
    rate: 5,
    title: "Trop trop bien !",
    comment:
      "Enfin une appli pratique et claire ! Cinq minutes de test et je l’anime déjà adoptée : beaucoup de références déjà enregistrées, des réponses immédiates (là où d’autres moulinent pendant une plombe), des ajouts de produits d’un seul clic (quand les autres demandes trente étapes)… bref, super content d’avoir enfin un outil fonctionnel à portée de main.\nUn grand merci !",
  },
  {
    username: "Damien_vg34",
    date: "07/04/2025",
    rate: 5,
    title: "Pratique",
    comment:
      "C’est facile d’utilisation, complet et régulièrement mis à jour :)",
  },
  {
    username: "g770g",
    date: "12/05/2025",
    rate: 5,
    title: "super initiative !",
    comment:
      "je suis ravie d’avoir trouvée cette nouvelle application pour vegan ! elle est complète ! on peut scanner des produits pour savoir si ils sont vegan mais ça permet aussi d’allimenter nous même la banque d’infos parce que l’application est encore nouvelle donc j’ai hâte de voir l’évolution de cette appli ! elle permet aussi de voir les E (additifs) si il sont vegan etc ! c’est top",
  },
];

export const faqData: FaqDataType[] = [
  {
    title: "Comment télécharger et utiliser l'application ?",
    description:
      "L'application est disponible sur l'App Store pour les iPhones, et sur GooglePlay pour les appareils Android. Vous pouvez aussi télécharger directement l'APK sur le dépôt github de l'appli.",
  },
  {
    title: "Pourquoi l'appli est-elle souvent mise à jour ?",
    description:
      "L'application est régulièrement mise à jour afin d'ajouter des fonctionnalités et de mettre à jour la base de données afin que le scan soit plus précis et les informations plus pertinentes. Pensez à mettre à jour l'application quand elle vous le propose !",
  },
  {
    title: "L’appli fonctionne-t-elle hors connexion ?",
    description:
      "Oui : le scan et la consultation des données des cosmétiques et additifs fonctionnent hors ligne, ce qui permet de vérifier rapidement les produits en magasin sans connexion internet !",
  },
  {
    title:
      "Est-ce que ça fonctionne aussi pour les cosmétiques et les additifs ?",
    description:
      "Oui : en plus du scan des produits, l’application permet de rechercher les additifs et les marques de cosmétiques.",
  },
  {
    title: "Qu’est-ce qui différencie 321 Vegan des autres applis ?",
    description:
      "321 Vegan est open-source, sans pubs, collaborative et gratuite. Elle peut s'utiliser hors ligne. Les informations sont régulièrement mise à jour pour améliorer la fiabilité et ne se base pas sur des analyses par IA, qui manque de précision. L'équipe fait aussi des vérifications auprès des marques.",
  },
  {
    title: "Pourquoi la notion de boycott apparaît-elle dans l’appli ?",
    description:
      "L’appli signale quand un produit ou une marque est concerné par un boycott. C'est un outil d’information pour aider les utilisateur&middot;ices à faire des choix éthiques et en conscience.",
  },
  {
    title:
      "La mention “vegan” prend-elle en compte les tests sur les animaux ?",
    description:
      "Oui : 321 Vegan vérifie la présence d’ingrédients d’origine animale, les tests et l'utilisation de produits animaux dans les différentes étapes de fabrication des produits.",
  },
  {
    title:
      "Le travail des singes pour la récolte de noix de coco est-il pris en compte ?",
    description:
      "Nous prenons en compte les pratiques d’exploitation animale et éthique au sens large. Nous faisons en sorte d'être le plus fiable que possible sur la question de l'utilisation des singes ou d'autre animaux non humains. Mais nous ne pouvons pas garantir à 100% l'absence d'erreur, bien que l'aspect collaboratif nous permet d'améliorer les données en continue.",
  },
  {
    title: "L’appli est-elle réservée aux véganes ?",
    description:
      "Non : elle vise les véganes mais aussi toute personne souhaitant consommer plus éthique — l’objectif est de rendre ces choix simples et accessibles. Elle peut aussi aider les proches de personnes véganes à ne pas se tromper en faisant les courses pour elleux !",
  },
  {
    title: "Comment soutenir ou participer ?",
    description:
      "321 Vegan est open-source : tout le monde peut contribuer sur GitHub, signaler des produits dans l’appli, rejoindre la communauté (Discord). Vous pouvez aussi faire une contribution financière sous forme d'abonnement soutien (à partir de 1&euro; par mois) ou de don ponctuel (buymeacoffee)",
  },
  {
    title: "D’où vient l’appli ?",
    description:
      "Le projet est indépendant, développé publiquement (dépôt GitHub), maintenu et distribué par Camille. Ce site web ainsi que l'outil de vérification des produits ont été développés par IsaSXM, contributrice essentielle du projet.",
  },
];

export const sourcesData: SourceDataType[] = [
  {
    title: "Animaux terrestres épargnés",
    description: "Chiffres clés sur la souffrance animale.",
    icon: "heart",
    color: "pink",
    link: {
      url: "https://www.l214.com/animaux/chiffres-cles/elevage/",
      label: "Association L214",
    },
  },
  {
    title: "Animaux marins épargnés",
    description:
      "Estimations du nombre de poissons tués chaque année dans le monde.",
    icon: "heart",
    color: "purple",
    link: {
      url: "http://fishcount.org.uk/",
      label: "Fish Count",
    },
  },
  {
    title: "CO<sub>2</sub> non émis",
    description:
      "Analyse des émissions de gaz à effet de serre en fonction du type de régime alimentaire.",
    icon: "circle-arrow-down",
    color: "orange",
    link: {
      url: "https://link.springer.com/article/10.1007/s10584-014-1169-1",
      label: "Étude sur les émissions de GES selon les régimes",
    },
  },
  {
    title: "Forêt préservée",
    description:
      "Données environnementales citées dans le documentaire Cowspiracy.",
    icon: "trees",
    color: "emerald",
    link: {
      url: "https://www.cowspiracy.com/facts",
      label: "Cowspiracy Facts",
    },
  },
  {
    title: "Eau économisée",
    description:
      "Base de données sur la consommation d’eau liée à différents produits.",
    icon: "droplet",
    color: "blue",
    link: {
      url: "https://www.waterfootprint.org/en/",
      label: "Water Footprint Network",
    },
  },
];

export const cosmeticsCriteria: string[] = [
  "Absence de tests sur animaux",
  "Absence de tests sur animaux sur les marchés étrangers",
  "Absence de chair animale",
  "Absence d'ingrédients d'origine animale dans le produit",
  "Absence d'ingrédient d'origine animale dans l'emballage",
  "Non exploitation des singes pour la récolte des noix de coco",
  "Ingrédients issus de l'agriculture biologique vegan",
  "Audits de contrôle",
];

export const cosmeticsLabelsData: CosmeticsLabelDataType[] = [
  {
    logo: vLabel,
    name: "V-Label",
    certify: [true, true, true, true, false, false, false, true],
  },
  {
    logo: veganSociety,
    name: "Vegan Society",
    certify: [true, false, true, true, true, false, false, false],
  },
  {
    logo: eveVegan,
    name: "EVE Vegan",
    certify: [true, true, true, true, true, false, true, true],
  },
  {
    logo: leapingBunny,
    name: "Leaping Bunny",
    certify: [true, true, false, false, false, false, false, true],
  },
  {
    logo: petaCF,
    name: "PETA CF",
    certify: [true, true, false, false, false, false, false, false],
  },
  {
    logo: petaVeganCF,
    name: "PETA Vegan & CF",
    certify: [true, true, true, true, true, false, false, false],
  },
  {
    logo: chooseCF,
    name: "Choose Cruelty Free",
    certify: [true, true, false, false, false, false, false, false],
  },
  {
    logo: ihtk,
    name: "IHTK",
    certify: [true, false, false, false, false, false, false, false],
  },
  {
    logo: oneVoiceT,
    name: "One Voice T",
    certify: [true, true, false, false, false, false, false, true],
  },
  {
    logo: oneVoiceC,
    name: "One Voice C",
    certify: [true, true, false, false, false, true, false, true],
  },
];

export const cosmeticsSourcesData: string[] = [
  "https://animaltesting.fr/",
  "https://vegan-pratique.fr/",
  "http://www.animalter.com/",
  "https://www.crueltyfreekitty.com/",
  "https://choosecrueltyfree.org/",
  "https://www.v-label.com/",
  "https://crueltyfree.peta.org/",
  "https://www.evevegan.org/fr",
  "https://www.leapingbunny.org/",
  "https://www.vegansociety.com/",
  "https://www.fondation-droit-animal.org/",
];

export const mapFeaturesData: MapFeaturesDataType[] = [
  {
    title: "Explorez",
    description:
      "Explorez la carte interactive pour découvrir tous les magasins répertoriés.",
    icon: "map",
  },
  {
    title: "Recherchez",
    description:
      "Recherchez rapidement où sont vendus vos produits vegan préférés.",
    icon: "search",
  },
  {
    title: "Trouvez",
    description:
      "Appuyez sur un magasin pour voir les produits vegan disponibles.",
    icon: "store",
  },
  {
    title: "Ajoutez",
    description:
      "Ajoutez vos magasins favoris où vous trouvez vos produits vegan préférés.",
    icon: "map-pin-plus",
  },
];

export const signalConsoChecklistData: SignalConsoChecklistDataType[] = [
  {
    icon: "camera",
    title: "Photo recto du produit",
    description:
      "Une photo nette du packaging avec la mention trompeuse visible (ex.&nbsp;: logo &laquo;&nbsp;vegan&nbsp;&raquo;, texte &laquo;&nbsp;végétalien&nbsp;&raquo;, etc.).",
  },
  {
    icon: "file-text",
    title: "Photo des ingrédients",
    description:
      "Une photo lisible de la liste d'ingrédients (généralement située au dos ou sous le produit). L'ingrédient problématique doit être identifiable.",
  },
  {
    icon: "barcode",
    title: "Code-barres du produit",
    description:
      "Il est recommandé d'avoir le code-barres du produit pour effectuer le signalement.",
  },
];

export const signalConsoTemplatesData: SignalConsoTemplatesDataType[] = [
  {
    id: "fausse-mention",
    label:
      "Mention &laquo;&nbsp;vegan&nbsp;&raquo;, &laquo;&nbsp;végétal&nbsp;&raquo; ou &laquo;&nbsp;plant based&nbsp;&raquo; trompeuse",
    description:
      "Modèle de texte à utiliser quand un produit contient des ingrédients d'origine animale mais affiche un logo ou une mention vegan/végétalien, indique végétal ou plant based, etc.",
    text: `Bonjour,\n\nJe souhaite signaler le produit [NOM DU PRODUIT] de la marque [MARQUE] (code-barres : [CODE-BARRES]), disponible à [NOM DU MAGASIN].\nCe produit affiche une mention « végétal » sur son emballage. Cependant, sa liste d'ingrédients contient [INGRÉDIENT ANIMAL], un ingrédient d'origine animale incompatible avec cette allégation.\nCette mention trompeuse peut induire en erreur les consommateurs cherchant à éviter les produits d'origine animale.\n\nPièces jointes : photo du recto du produit (mention visible), photo de la liste des ingrédients.\n\nCordialement`,
  },
];

export const resourceCategoriesData: ResourceCategoriesDataType[] = [
  {
    id: 1,
    name: "Associations",
    icon: "hand-heart",
    slug: "associations",
    description:
      "Liste non exhaustive d'associations et de sanctuaires qui œuvrent pour la libération animale&nbsp;!",
    color: "cyan",
  },
  {
    id: 2,
    name: "Podcasts",
    icon: "podcast",
    slug: "podcasts",
    description:
      "Des podcasts qui nous amènes à réfléchir sur notre rapport aux autres animaux et aux différentes solutions.",
    color: "purple",
  },
  {
    id: 3,
    name: "Lectures",
    icon: "book-open-text",
    slug: "lectures",
    description:
      "Essais, témoignages, recueuils, bandes-dessinées, etc. (re)découvrez la litérature antispéciste&nbsp;!",
    color: "emerald",
  },
  {
    id: 4,
    name: "Blogs",
    icon: "rss",
    slug: "blogs",
    description:
      "Contenus engagés, humoristiques, culinaires ou encore informatifs, un assortiment des pépites du web&nbsp;!",
    color: "pink",
  },
  {
    id: 5,
    name: "Documentaires",
    icon: "video",
    slug: "documentaires",
    description:
      "Découvrez ces films documentaires inspirants sur les droits des animaux et le mode de vie végan.",
    color: "sky",
  },
  {
    id: 6,
    name: "Études scientifiques",
    icon: "atom",
    slug: "etudes-scientifiques",
    description:
      "Ces études scientifiques vous permettront d'enrichir vos connaissances sur le véganisme et le spécisme.",
    color: "yellow",
  },
  {
    id: 7,
    name: "Musique",
    icon: "audio-lines",
    slug: "musique",
    description:
      "Des textes engagés sur des mélodies entraînantes, (re)découvrez les sons antispécistes&nbsp;!",
    color: "red",
  },
  {
    id: 8,
    name: "Autres",
    icon: "sticker",
    slug: "autres",
    description:
      "Toutes les ressources complémentaires qu'on a pas vraiment su catégoriser mais qui méritent d'être connue&nbsp;;)",
    color: "orange",
  },
];

export const resourcesData: ResourcesDataType[] = [
  {
    category_slug: "associations",
    name: "Anonymous for the Voiceless",
    description:
      "Anonymous for the Voiceless est un mouvement de défense des droits des animaux avec une position abolitionniste. Les activistes sensibilisent le public dans la rue notamment en montrant des images de l'exploitation animale.",
    link: "https://anonymousforthevoiceless.org",
    logo: anonymousForTheVoiceless,
  },
  {
    category_slug: "associations",
    name: "L214 Éthique & Animaux",
    description:
      "L214 montre les conditions de vie, de transport et d’abattage des animaux en s’appuyant sur des enquêtes filmées et accompagnées d’informations sourcées. L'association soulève des questions éthiques reposant sur des arguments étayés et propose des solutions à mettre en œuvre aux niveaux politique et individuel.",
    link: "https://www.l214.com/",
    logo: L214,
  },
  {
    category_slug: "associations",
    name: "Co&xister",
    description:
      "Association créée par l'autrice militante Virginia Markus, Co&xister propose un sanctuaire pour vaches, cochons et autres animaux sauvés de l'exploitation animale. L’association accompagne également les éleveuses et éleveurs dans leur reconversion professionnelle.",
    link: "https://www.asso-coexister.ch/",
    logo: coexister,
  },
  {
    category_slug: "associations",
    name: "Sanctopia",
    description:
      "Sanctopia est une plateforme qui met en relation des sanctuaires et des particuliers souhaitant aider leurs rescapés. Sanctopia transforme le parrainage / marrainage en un nouveau model de solidarité plus ouvert, inclusif, et accessible, permettant à chacun et chacune de s'engager auprès des animaux à la hauteur de ses moyens.",
    link: "https://sanctopia.org/",
    logo: sanctopia,
  },
  {
    category_slug: "associations",
    name: "GroinGroin & co",
    description:
      "L’association GroinGroin sauve et recueille des animaux d’élevage exploités pour leur chair, leur lait, leurs oeufs.... Elle sensibilise le public au respect des animaux. GroinGroin est aussi un centre d’information sur les cochons, et elle anime un réseau de placement pour lutter contre les abandons dont les cochons nains sont largement victimes.",
    link: "https://groingroin.org/",
    logo: groingroin,
  },
  {
    category_slug: "associations",
    name: "Futur & Sanctuaires du Futur",
    description:
      "Futur œuvre pour changer les mentalités sur les animaux de ferme et faire évoluer leur statut juridique, notamment en démocratisant leur adoption au travers de leur &laquo;&nbsp;sanctuaire géant&nbsp;&raquo; dédié aux animaux de ferme.",
    link: "https://futur-asso.com/",
    logo: futurAsso,
  },
  {
    category_slug: "associations",
    name: "Animal Save Movement",
    description:
      "Animal Save Movement is a global network of activists that bear witness to animals at the gates of slaughterhouses in order to expose and dismantle animal exploitation industries.",
    link: "https://thesavemovement.org/",
    logo: asmAsso,
  },
  {
    category_slug: "associations",
    name: "Réseau des refuges animalistes",
    description:
      "Le Réseau des refuges animalistes est une association qui regroupe des refuges et sanctuaires pour les animaux dits de rente. Il a pour mission de promouvoir ces structures dans leurs actions de protection de ces animaux, issus de la maltraitance et de l’exploitation humaine.",
    link: "https://www.reseau-national-refuges-animalistes.org/",
    logo: refugeAnimaliste,
  },
  {
    category_slug: "associations",
    name: "Nos Viventia",
    description:
      "NOS VIVENTIA (« Nous les vivants ») mène des enquêtes de terrain indépendantes sur les atteintes aux animaux et à la biodiversité. Fondée par l’écologue Pierre Rigaux, l’association apporte des preuves pour faire évoluer les pratiques, la loi et le débat public.",
    link: "https://www.nosviventia.com/",
    logo: nosViventia,
  },
  {
    category_slug: "associations",
    name: "PAZ",
    description:
      "L'association PAZ se mobilise pour obtenir aujourd’hui des avancées concrètes et ambitieuses pour les animaux et créer un monde plus juste, un pas après l’autre.",
    link: "https://zoopolis.fr/",
    logo: paz,
  },
  {
    category_slug: "associations",
    name: "Gardiens des félins",
    description:
      "Gardiens des félins est une association franco-suisse qui dénonce les réseaux de torture animale dans le monde. Leur campagne sur les réseaux de torture de chats et autres animaux a commencé en soutien au travail déjà en cours par Feline Guardians, un collectif international qui appelle à une loi anti-cruauté animale en Chine.",
    link: "https://www.instagram.com/gardiensdesfelins/",
    logo: gardiensDesFelins,
  },
  {
    category_slug: "podcasts",
    name: "Comme un poisson dans l'eau",
    description:
      "Créé et animé par Victor Duran-Le Peuch, ce podcast contre le spécisme invite des chercheur&middot;euses, des journalistes, des artistes, des membres d'associations de défense des animaux, etc. à répondre à toutes les questions sur les oppressions que subissent les autres animaux.",
    link: "https://linktr.ee/poissonpodcast",
    logo: poissonPodcast,
  },
  {
    category_slug: "podcasts",
    name: "Poule Sentimentale",
    description:
      "Podcast mensuel qui propose des portraits sensibles de personnes qui s'engagent ou militent pour la cause animale. Ces rencontres permettent d’aborder et de mieux comprendre ce que sont le véganisme, la sentience, l’exploitation animale, l’antispécisme, la place de l’être humain parmi les autres animaux et les rapports de domination qu’il exerce sur les autres espèces.",
    link: "https://linktr.ee/poulesentimentale",
    logo: pouleSentimentale,
  },
  {
    category_slug: "podcasts",
    name: "Las Vegan Parano",
    description:
      "Le podcast qui décortique le tofu, démonte les clichés, et montre que non, non, les vegans ne sont pas fous... juste un peu *beaucoup* plus sensibles. À travers interviews, mini-reportages et réflexions, Isabelle Rivoire-Grange secoue les idées reçues comme un shaker protéiné — le tout saupoudré de second degré.",
    link: "https://www.irivoiregrange.com/las-vegan-parano-podcast/",
    logo: lasVeganParano,
  },
  {
    category_slug: "podcasts",
    name: "La Série Documentaire",
    description:
      "Le monde après le spécisme - En finir avec l'oppression des animaux. Cette série documentaire donne à entendre celles et ceux qui, piégés à l’intérieur du système spéciste, se questionnent sur leur métier, celles et ceux qui ont réussi à en sortir et celles et ceux qui œuvrent pour démanteler le système et libérer les animaux.",
    link: "https://www.radiofrance.fr/franceculture/podcasts/serie-le-monde-apres-le-specisme-en-finir-avec-l-oppression-des-animaux",
    logo: leMondeApresLeSpecisme,
  },
  {
    category_slug: "podcasts",
    name: "Manjé",
    description:
      "Manjé, c’est un podcast né là où le goût heurte le terrain. On y parle de nourriture, de dépendance, de plaisir, mais aussi d’héritages coloniaux, de justice alimentaire et de véganisme en contexte local. À travers réflexions personnelles et voix invitées, on questionne ce qu’on avale, ce qu’on hérite, ce qu’on tait, et ce qu’on veut transformer.",
    link: "https://www.mangeusedherbe.net/",
    logo: manje,
  },
  {
    category_slug: "lectures",
    name: "L'Amorce",
    description:
      "L’Amorce est une revue en ligne engagée théoriquement et politiquement contre le spécisme qui explore les enjeux éthiques, politiques et culturels de la lutte contre le spécisme.",
    link: "https://lamorce.co/",
    logo: lamorce,
  },
  {
    category_slug: "lectures",
    name: "Les Cahiers antispécistes",
    description:
      "Les Cahiers antispécistes sont une revue née en 1991 et qui a été publiée jusqu’en 2019, après quoi elle a cessé définitivement de paraître. Les 43 numéros édités depuis l’origine se trouvent en libre accès sur le site.",
    link: "https://www.cahiers-antispecistes.org/",
  },
  {
    category_slug: "lectures",
    name: "Insolente Veggie",
    description:
      "Insolente Veggie est une série de bande dessinée humoristique sur le carnisme et le spécisme de la dessinatrice et militante antispéciste végane Rosa B, publiée par les Éditions La Plage.",
    link: "https://insolente-veggie.com/",
    logo: insolenteVeggie,
  },
  {
    category_slug: "lectures",
    name: "L'usine du pire",
    description:
      "Pia Shazar et Fanny Vaucher créent une oeuvre graphique saisissante où s’entrelacent la rage et la rigueur documentaire. Dans cette expérience viscérale, le autrices nous invitent à reconsidérer notre rapport aux animaux en nous confrontant aux mécanismes occultés de leur exploitation.",
    link: "https://editionslaveilleuse.ch/product/l-usine-du-pire/",
    logo: usineDuPire,
  },
  {
    category_slug: "blogs",
    name: "Questions animalistes",
    description:
      "Florence Dellerie est autrice et illustratrice scientifique et créatrice du site Questions Animalistes qui regroupe ses travaux dédiés à l'éthique et à la promotion de la pensée critique. Elle est également conférencière, éditrice et co-fondatrice du Projet Méduses.",
    link: "https://questionsanimalistes.com/",
    logo: questionsAnimalistes,
  },
  {
    category_slug: "blogs",
    name: "L'observatoir du spécisme",
    description:
      "L'Observatoire du spécisme documente l’exploitation animale en Suisse et dénonce les acteurs de cette industrie. En publiant des dossiers d’enquête, iels mettent en lumière les pratiques spécistes, et accompagnent ces publications de mobilisations et de campagnes. Avec le soutien de plusieurs centaines de membres, l’Observatoire du spécisme agit pour davantage de justice pour les autres animaux.",
    link: "https://observatoireduspecisme.ch/",
    logo: observatoireDuSpecisme,
  },
  {
    category_slug: "blogs",
    name: "L.I.A.",
    description:
      "La Ligue Internationale pour la Promotion du Véganisme et de l’Antispécisme  (L.I.A. en abrégé – Ligue Internationale Antispéciste) est une ASBL de droit belge dont l’objectif essentiel est la promotion du véganisme et de l’antispécisme tant dans la société civile qu’au sein des trois niveaux de pouvoirs (exécutif, législatif et judiciaire).",
    link: "https://ligue-internationale-antispeciste.org/accueil/",
  },
  {
    category_slug: "blogs",
    name: "Tous égaux",
    description:
      "Anne-Sophie, activiste pour la libération animale passionnée des sciences et de psychologie, aime se poser des questions sur divers sujets, et analyser des données scientifiques. Activiste pour la libération animale, elle inspire les gens à adopter un mode de vie plus sain, et en accord avec leurs valeurs.",
    link: "https://tousegaux.home.blog/",
  },
  {
    category_slug: "blogs",
    name: "Viande Info",
    description:
      "L'élevage et la pêche ont aujourd'hui des conséquences dramatiques pour les humains, les animaux et l'environnement. Ce site créé par L214 recense l'ensemble des problématiques liées à l'élevage et la pêche, et fournit énormément de ressources sur ce sujet.",
    link: "https://www.viande.info/",
    logo: viandeInfo,
  },
  {
    category_slug: "documentaires",
    name: "Earthlings",
    description:
      "Earthlings est un film documentaire américain de Shaun Monson sorti en 2005 qui montre le traitement réservé aux animaux destinés à être des animaux domestiques, à la production de nourriture, à la confection de vêtements, aux divertissements et à la recherche scientifique.",
    link: "https://www.imagotv.fr/documentaires/earthlings",
    logo: earthlings,
  },
  {
    category_slug: "documentaires",
    name: "Dominion",
    description:
      "Dominion est un documentaire australien du réalisateur et scénariste Chris Delforce, sorti en 2018, qui dénonce six différentes facettes de l'exploitation animale et remet en question la domination de l'espèce Homo sapiens sur le règne animal.",
    link: "https://www.dominionmovement.com/watch",
    logo: dominion,
  },
  {
    category_slug: "documentaires",
    name: "Cowspiracy",
    description:
      "Cowspiracy examine l'impact de l'agriculture animale sur l'environnement, et enquête sur les positions de certaines organisations environnementales sur le sujet. Le film aborde diverses préoccupations environnementales, notamment le réchauffement climatique, l'utilisation de l'eau, la déforestation et les zones mortes des océans.",
    link: "https://www.cowspiracy.com/",
    logo: cowspiracy,
  },
  {
    category_slug: "documentaires",
    name: "Seaspiracy",
    description:
      "En enquêtant sur le mal infligé par les humains aux espèces marines, un cinéaste fasciné par les écosystèmes océaniques met au jour une conspiration mondiale alarmante.",
    link: "https://www.seaspiracy.org/",
    logo: seaspiracy,
  },
  {
    category_slug: "documentaires",
    name: "The Game Changers",
    description:
      "Ce documentaire s’intéresse à de nombreuses personnalités (sportifs, scientifiques, militaires…) qui ont adopté un régime vegétarien. L’œuvre veut montrer que l’on peut réaliser de grandes choses même sans consommer de la viande, à l’image de Carl Lewis, qui a été l’homme le plus rapide du monde alors qu’il était vegan.",
    link: "https://gamechangersmovie.com/",
    logo: theGameChangers,
  },
  {
    category_slug: "documentaires",
    name: "Comment comprendre le langage des aliens ?",
    description:
      "&laquo;&nbsp;Ce n'était pas ce qu'on attendait, mais c'était ce dont on avait besoin.&nbsp;&raquo; Cette critique d'un&middot;e spectateurice résume parfaitement ce documentaire, à regarder et à partager sans modération.",
    link: "https://www.youtube.com/watch?v=j2JDvXvymBQ",
    logo: egoAlien,
  },
  {
    category_slug: "etudes-scientifiques",
    name: "Déclaration de New York",
    description:
      "La &laquo;&nbsp;déclaration de New York sur la conscience animale&nbsp;&raquo; a été rendue publique le 19 avril 2024. Complémentaire de la déclaration de Cambridge de 2012, elle met en avant notre responsabilité dans la prise en compte de la sentience des autres animaux.",
    link: "https://sites.google.com/nyu.edu/nydeclaration/declaration",
  },
  {
    category_slug: "etudes-scientifiques",
    name: "La Fondation Droit Animal",
    description:
      "La Fondation droit animal, éthique et sciences est un groupe d’études, de réflexions et d’expertises pluridisciplinaires qui vise à améliorer la condition animale par une transposition juridique des nouveaux acquis scientifiques et des évolutions éthiques, liés à la vie des animaux et à leurs relations avec l’homme.",
    link: "https://www.fondation-droit-animal.org/category/revue-trimestrielle/science/",
    logo: logoLda,
  },
  {
    category_slug: "musique",
    name: "Harambé Project",
    description:
      "Harambé c'est un projet musical rap/reggae international engagé pour la cause animale créé par deux artistes militants, Kahifa Pelao et Res Turner, et parrainé par Greg Guillotin. L'intégralité de l'argent généré par leurs streams seront reversés à L214.",
    link: "https://www.instagram.com/harambe_project/",
    logo: harambeProject,
  },
  {
    category_slug: "musique",
    name: "BXII",
    description:
      "BXII est le premier groupe de rap à se constituer explicitement autour du véganisme et de l'antispécisme. Les thématiques abordées s'articulent autour de ces questions et traitent tant de la chasse que de l'élevage, tant de nutriments et de carences que de convergence des luttes.",
    link: "https://www.youtube.com/@BXIIofficial",
    logo: b12crew,
  },
  {
    category_slug: "musique",
    name: "Res Turner",
    description:
      "Res Turner est un artiste indépendant et un activiste. À la fois, graffeur, rappeur et slameur. À contre-courant du rap actuel, son rap est engagé avec des chansons abordant des questions de société, de sexisme, de harcèlement scolaire, de spécisme, de racisme, des réfugiés, ou encore d’environnement.",
    link: "http://www.youtube.com/@ResTurnerOfficiel",
    logo: resTurner,
  },
  {
    category_slug: "musique",
    name: "Feldi",
    description:
      "Feldi est un artiste et activiste italien engagé pour la cause animale. Son rap est engagé avec des chansons abordant les thématiques du véganisme et de l'antispécisme.",
    link: "https://linktr.ee/iamfeldi",
    logo: feldi,
  },
  {
    category_slug: "autres",
    name: "Projet Méduses",
    description:
      "Le Projet Méduses est un mouvement défendant la prise en compte des intérêts de tous les êtres sentients, c’est-à-dire des individus en mesure de ressentir des émotions, de la souffrance, du plaisir, qu’ils soient humains ou non.",
    link: "https://projet-meduses.com/",
    logo: projetMeduses,
  },
  {
    category_slug: "autres",
    name: "La ferme Bernier",
    description:
      "La Ferme Bernier est une entreprise familiale depuis 1979 qui offre la meilleure viande satirique de chien élevé en plein air, dans le respect du terroir et des traditions paysannes.",
    link: "https://www.ferme-bernier.fr/",
    logo: bernier,
  },
  {
    category_slug: "autres",
    name: "Anola",
    description:
      "ANOLA est une plateforme francophone dédiée au végétal, qui rassemble une communauté engagée, particuliers, créateur&middot;rices, marques, restaurants et expert&middot;es, autour d’un objectif commun&nbsp;: rendre le mode de vie végétal plus simple, accessible et joyeux.",
    link: "https://anola.space/",
    logo: anola,
  },
];
