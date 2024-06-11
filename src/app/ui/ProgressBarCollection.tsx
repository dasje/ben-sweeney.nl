import Card from "./Card";
import ProgressBar from "./ProgressBar";

interface ProgressBarCollectionProps {
  collectionName: string;
  data: {
    skillName: string;
    progressPercentage: number;
  }[];
}

const ProgressBarCollection = ({
  collectionName,
  data,
}: ProgressBarCollectionProps) => {
  const listBars = data.map((item, idx) => (
    <div className="place-content-center p-2" key={idx}>
      <ProgressBar
        skillName={item.skillName}
        progressPercentage={item.progressPercentage}
      />
    </div>
  ));
  return <Card title={collectionName}>{listBars}</Card>;
};

export default ProgressBarCollection;
