import { featuresData } from "@/assets/assets";
import Feature from "@/app/ui/home/Feature";

const Features = () => {
  return (
    <>
      {featuresData.map((feature, index) => (
        <Feature key={`feat-${index}`} feature={feature} index={index} />
      ))}
    </>
  );
};

export default Features;
