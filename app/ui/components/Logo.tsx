import Image from "next/image";

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
}
const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Image
      src="/logo-dark.png"
      alt="Logo 321 Vegan"
      width={915}
      height={915}
      className={className}
      {...props}
    />
  );
};

export default Logo;
