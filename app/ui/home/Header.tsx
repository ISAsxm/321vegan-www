import Image from "next/image";
import {
  MotionH1,
  MotionDiv,
  MotionP,
  MotionH2,
} from "@/app/ui/components/Motions";
import AppleStoreBadge from "../components/AppleStoreBadge";
import GooglePlayBadge from "../components/GooglePlayBadge";

const Header = () => {
  return (
    <header
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <MotionDiv
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/logo-dark.png"
          alt="321Vegan, l'appli qui t'aide à vérifier si un produit est végane"
          width={915}
          height={915}
          className="rounded-full w-40 h-40 object-cover object-top"
        />
      </MotionDiv>
      <MotionH1
        className="flex items-center gap-2 text-xl md:text-2xl mb-3"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        L&apos;appli mobile qui aide les vegans 🌱
      </MotionH1>
      <MotionH2
        className="text-3xl sm:text-6xl lg:text-[66px] font-extrabold text-brand-600"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Découvrez 321 Vegan&nbsp;!
      </MotionH2>
      <MotionP
        className="text-lg max-w-2xl mx-auto font-merriweather"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <strong>Scannez des codes-barres</strong>,{" "}
        <strong>vérifiez les additifs et les marques de cosmétiques</strong>,{" "}
        <strong>mesurez votre impact</strong>&nbsp;:{" "}
        <span className="font-extrabold text-brand-500">
          téléchargez maintenant (c&apos;est gratuit)&nbsp;!
        </span>
      </MotionP>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 leading-relaxed">
        <MotionDiv
          className="w-50 relative z-0 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded hover:after:bg-black hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <AppleStoreBadge />
        </MotionDiv>
        <MotionDiv
          className="w-50 relative z-0 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded hover:after:bg-black hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <GooglePlayBadge />
        </MotionDiv>
      </div>
    </header>
  );
};

export default Header;
