import { PropsWithChildren } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ContactUsCtaProps extends PropsWithChildren {
  title?: string;
  bgColor?: string;
  titleColor?: string;
  textColor?: string;
  btnColor?: string;
  btnTextColor?: string;
  wrapperClass?: string;
}

const ContactUsCta = ({
  title,
  bgColor = "bg-brand-50",
  titleColor = "text-brand-900",
  textColor = "text-brand-700",
  btnColor = "bg-brand-700 after:bg-brand-700",
  btnTextColor = "text-white",
  wrapperClass = "",
  children,
}: ContactUsCtaProps) => {
  return (
    <div
      className={`text-center rounded-xl p-8 shadow-sm ${bgColor} ${wrapperClass}`}
    >
      <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>
        {title || <>Vous avez encore des questions&nbsp;?</>}
      </h2>
      <p className={`text-lg leading-relaxed mb-6 ${textColor}`}>
        {children ||
          "Notre communauté se tient à votre disposition pour répondre à toutes vos questions."}
      </p>
      <Link
        href="/contact"
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 ${btnTextColor} ${btnColor} after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500`}
      >
        Contactez-nous
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default ContactUsCta;
