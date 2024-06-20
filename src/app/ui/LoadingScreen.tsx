import LoadingAnimation from "@/app/ui/LoadingAnimation";

interface LoadingProps {
  pageName: string;
}

const LoadingScreen = ({ pageName }: LoadingProps) => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex-row p-1 md:p-4 border-solid border-2 rounded-3xl w-11/12 md:w-9/12 max-h-32">
      <div className="font-bold text-center text-white tracking-wider text-3xl p-1">
        <h1>Loading {pageName}</h1>
      </div>
      <div className="flex-row p-8 border-solid border rounded-xl">
        <LoadingAnimation />
      </div>
    </div>
  );
};

export default LoadingScreen;
