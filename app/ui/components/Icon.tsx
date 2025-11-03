import { LucideProps } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: string;
}

const Icon = ({ name, ...props }: IconProps) => {
  return (
    <DynamicIcon
      name={name as keyof typeof dynamicIconImports}
      {...props}
      aria-hidden="true"
    />
  );
};

export default Icon;
