import React from "react";

const BarChart = ({ day,barOne, barTwo, barThree, barFour, first="bg-gray-300" }) => {
  return (
    <div className="flex flex-col w-max h-full justify-center items-center">
      <div
        className="h-32 w-max  relative flex gap-3"
      >
        <div className={`w-1.5 rounded-full ${first} h-full`}></div>
        <div className={`w-1.5 rounded-full ${barOne} h-[50%] mt-4`}></div>
        <div className="w-1.5 rounded-full flex flex-col gap-1 h-[50%] mt-14">
                    <div className={`w-1.5 rounded-full ${barTwo} h-[50%]`}></div>
                    <div className={`w-1.5 rounded-full ${barThree} h-[50%]`}></div>
        </div>
        <div className={`w-1.5 rounded-full ${barFour} h-[25%] mt-24`}></div>
      </div>
      <h5 className="text-gray-400 my-2">{day}</h5>
    </div>
  );
};

export default BarChart;
