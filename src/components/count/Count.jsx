import React from "react";
import { useCountStore } from "../../myZustand/count-store";
const Count = () => {
  const { count, increment, decrement, resetCount } = useCountStore(
    (state) => state
  );
  return (
    <div className="text-center">
      <div className="">
        Count: <span className="text-blue-500 font-bold text-xl">{count}</span>{" "}
      </div>
      <div className="gap-x-[10px] w-full">
        <button
          className="text-white mr-[5px]  bg-blue-500 font-bold text-lg px-[10px] py-[5px] border-none outline-none"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="text-white  bg-red-300 font-bold text-lg px-[10px] py-[5px] border-none outline-none"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="text-white ml-[5px]  bg-gray-500 font-bold text-lg px-[10px] py-[5px] border-none outline-none"
          onClick={resetCount}
        >
          resetCount
        </button>
      </div>
    </div>
  );
};

export default Count;