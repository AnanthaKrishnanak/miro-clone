import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <TailSpin color="black" height={50} width={50} />
    </div>
  );
};

export default Loading;
