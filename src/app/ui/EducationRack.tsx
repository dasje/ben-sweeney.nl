export interface EducationRackProps {
  instituteName: string;
  studied: string;
}

const EducationRack = ({ instituteName, studied }: EducationRackProps) => {
  return (
    <div className="bg-secondcolor border-solid border-8 rounded-xl px-5 py-5 pt-1 pb-2.5">
      <div className="font-semibold text-left text-thirdcolor">
        <div>{instituteName}</div>
      </div>
      <div className="font-semibold md:text-right text-white">
        <div>{studied}</div>
      </div>
    </div>
  );
};

export default EducationRack;
