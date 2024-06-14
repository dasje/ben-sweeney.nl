import "@/app/globals.css";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return (
    <div className="flex-row p-1 md:p-0 rounded-3xl md:w-11/12">
      <div className="flex-row p-1 bg-bsCardChildrenBackgroundColor border-solid border-2 rounded-xl">
        {props.children && <div className="space-y-4">{props.children}</div>}
      </div>
    </div>
  );
};

export default Container;
