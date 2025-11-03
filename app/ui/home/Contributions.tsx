import { contributionsData } from "@/assets/assets";
import Card from "@/app/ui/components/Card";

const Contributions = () => {
  return (
    <div className="grid grid-cols-auto gap-6">
      {contributionsData.map((contribution, index) => (
        <Card key={index} item={contribution} />
      ))}
    </div>
  );
};

export default Contributions;
