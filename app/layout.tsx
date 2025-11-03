import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { Toaster } from "react-hot-toast";
import { polyfill } from "interweave-ssr";

import "./globals.css";

polyfill();

export const metadata: Metadata = {
  title: {
    template: "%s | 321 Vegan",
    default: "321 Vegan",
  },
  description:
    "Scannez des codes barres, vérifiez les additifs et marques de cosmétiques, mesurez votre impact : téléchargez maintenant (c'est gratuit) !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased leading-8 overflow-x-hidden bg-white text-brand-950 `}
      >
        {children}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            className: "border-[0.5px] border-brand-400 bg-white",
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </body>
    </html>
  );
}
