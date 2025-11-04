import type { MetadataRoute } from "next";
import { appStoreLinks } from "@/assets/assets";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "321 Vegan",
    short_name: "321 Vegan",
    description:
      "321 Vegan, l'appli mobile qui aide les vegans. Scannez des codes barres, vérifiez les additifs et marques de cosmétiques, mesurez votre impact : téléchargez maintenant (c'est gratuit) !",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#428754",
    lang: "fr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    related_applications: [
      {
        platform: "apple",
        url: appStoreLinks.apple ?? "",
      },
      {
        platform: "play",
        url: appStoreLinks.google ?? "",
      },
    ],
  };
}
