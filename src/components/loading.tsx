import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-gray-400/30 z-10">
      <LoaderCircle className="animate-spin text-black" size={70} />
    </div>
  );
};

export default Loading;
