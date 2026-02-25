import { AdditiveDataType } from "@/types/definitions";
import AdditiveListItem from "./AdditiveListItem";

interface AdditivesListProps {
  data: AdditiveDataType[];
}

const AdditivesList = ({ data }: AdditivesListProps) => {
  return (
    <ul className="flex flex-wrap items-center justify-evenly gap-3">
      {data.map((item) => (
        <AdditiveListItem key={`${item.e_number}`} item={item} />
      ))}
    </ul>
  );
};

export default AdditivesList;
