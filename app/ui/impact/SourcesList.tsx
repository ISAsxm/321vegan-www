import { sourcesData } from "@/assets/assets";
import SourcesListItem from "./SourcesListItem";

const SourcesList = () => {
  const [primarySource, secondarySource, ...otherSources] = sourcesData;
  return (
    <div className="w-full">
      <div className="flex flex-col w-full mb-10 lg:flex-row">
        {[primarySource, secondarySource].map((source, index) => (
          <SourcesListItem key={`source-${index}`} source={source} />
        ))}
      </div>
      <div className="flex flex-col w-full mb-5 lg:flex-row">
        {otherSources.map((source, index) => (
          <SourcesListItem key={`source-${index}`} source={source} />
        ))}
      </div>
    </div>
  );
};

export default SourcesList;
