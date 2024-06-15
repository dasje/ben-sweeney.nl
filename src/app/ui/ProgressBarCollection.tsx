import { useEffect, useState } from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

type IncomingDataType = {
  librariesFrameworks: { skillName: string; progressPercentage: number }[];
  skillName: string;
  progressPercentage: number;
};
interface ProgressBarCollectionProps {
  collectionName: string;
  data: IncomingDataType[];
}

const ProgressBarCollection = ({
  collectionName,
  data,
}: ProgressBarCollectionProps) => {
  const [revealLibraries, setRevealLibraries] = useState<number[]>([]);
  const [currentData, setCurrentData] = useState<IncomingDataType[]>(data);

  const sortData = () => {
    var retArray: IncomingDataType[] = data;
    retArray.sort(function (a, b) {
      return b.progressPercentage - a.progressPercentage;
    });
    setCurrentData(retArray);
  };

  useEffect(() => sortData());

  const listBars = currentData.map((item, idx) => (
    <div
      className="grid grid-cols-1 place-content-center"
      key={idx}
      onMouseDown={() =>
        setRevealLibraries(
          revealLibraries.indexOf(idx) === -1
            ? [...revealLibraries, idx]
            : revealLibraries.filter((e) => e !== idx)
        )
      }
    >
      <ProgressBar
        skillName={item.skillName}
        progressPercentage={item.progressPercentage}
        librariesFrameworks={item.librariesFrameworks}
      />
      {item.librariesFrameworks.length > 0 &&
        revealLibraries.indexOf(idx) !== -1 && (
          <div className="m-2 p-1 w-10/12 bg-bsCardChildrenBackgroundColor border-solid border rounded-xl place-self-center text-sm">
            {item.librariesFrameworks.map((item, idx) => (
              <ProgressBar
                key={idx}
                skillName={item.skillName}
                progressPercentage={item.progressPercentage}
                librariesFrameworks={[]}
              />
            ))}
          </div>
        )}
    </div>
  ));

  return <Card title={collectionName}>{listBars}</Card>;
};

export default ProgressBarCollection;
