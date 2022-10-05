import { useFrosting } from ".";

const Side = () => {
  const { frosting } = useFrosting();

  console.log(frosting);
  return (
    <div className="flex items-center justify-center h-full text-6xl">🧁</div>
  );
};

export default Side;
