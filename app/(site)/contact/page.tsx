import { Metadata } from "next";
import ContactForm from "@/app/ui/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question, une remarque, un commentaire ? Notre communauté se tient à votre disposition pour répondre à toutes vos questions.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 sm:px-[12%] min-h-screen">
      <div className="relative">
        <div className="container mx-auto px-5 py-24">
          <div className="relative sm:max-w-4xl sm:mx-auto">
            <div className="absolute inset-0 bg-linear-to-r from-brand-300 to-brand-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-4 py-10 bg-brand-700 shadow-lg sm:rounded-3xl sm:p-20">
              <header className="mb-12 flex w-full flex-col text-center">
                <h1 className="text-center text-white mb-4 text-3xl sm:text-5xl font-merriweather">
                  Contactez-nous
                </h1>
                <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-white/90">
                  Une question, une remarque, un commentaire ? Notre communauté
                  se tient à votre disposition pour répondre à toutes vos
                  questions.
                </p>
              </header>

              <main className="mx-auto md:w-2/3">
                <ContactForm />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
