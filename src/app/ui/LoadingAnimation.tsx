interface LoadingAnimationProps {
  color?: "orange" | "beige" | "white";
}

const LoadingAnimation = ({ color }: LoadingAnimationProps) => {
  const bgcolor = {
    orange: "bg-midOrange",
    beige: "bg-beige",
    white: "bg-white",
  };
  return (
    <div className="flex space-x-2 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div
        className={`h-8 w-8 ${
          color ? bgcolor[color] : bgcolor["white"]
        } rounded-full animate-bounce [animation-delay:_1s]`}
      ></div>
      <div
        className={`h-8 w-8 ${
          color ? bgcolor[color] : bgcolor["white"]
        } rounded-full animate-bounce [animation-delay:_0.5s]`}
      ></div>
      <div
        className={`h-8 w-8 ${
          color ? bgcolor[color] : bgcolor["white"]
        } rounded-full animate-bounce`}
      ></div>
    </div>
  );
};
export default LoadingAnimation;
