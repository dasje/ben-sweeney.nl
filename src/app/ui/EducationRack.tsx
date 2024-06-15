export interface EducationRackProps {
  instituteName: string;
  studied: string;
}

const EducationRack = ({ instituteName, studied }: EducationRackProps) => {
  return (
    <div className="bg-secondcolor border-solid border-2 rounded-xl px-5 py-5 pt-1 pb-2.5">
      <div className="font-semibold text-lg text-left md:text-white text-thirdcolor tracking-wide">
        <div>{instituteName}</div>
      </div>
      <div className="font-light text-right text-white tracking-wide">
        <div>{studied}</div>
      </div>
    </div>
  );
};

export default EducationRack;
