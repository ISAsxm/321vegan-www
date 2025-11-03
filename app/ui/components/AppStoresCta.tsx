import AppleStoreBadge from "@/app/ui/components/AppleStoreBadge";
import GooglePlayBadge from "@/app/ui/components/GooglePlayBadge";

interface AppStoresCtaProps {
  bgColor?: string;
  titleColor?: string;
  textColor?: string;
  wrapperClass?: string;
}

const AppStoresCta = ({
  bgColor = "bg-brand-600",
  titleColor = "text-white",
  textColor = "text-white/90",
  wrapperClass = "",
}: AppStoresCtaProps) => {
  return (
    <div
      className={`text-center rounded-xl p-8 shadow-sm ${bgColor} ${wrapperClass}`}
    >
      <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>
        Prêt&middot;es à vous simplifier la vie&nbsp;?
      </h2>
      <p className={`text-lg leading-relaxed mb-6 ${textColor}`}>
        Téléchargez l&apos;app dès maintenant, c&apos;est gratuit et sans
        publicités&nbsp;!
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <AppleStoreBadge />
        <GooglePlayBadge />
      </div>
    </div>
  );
};

export default AppStoresCta;
