import React from "react";
import BarChart from "./BarChart";

const ActivityCard = () => {
  return (
    <div className="animate w-full px-6 py-4 mb-2 bg-purple-100 rounded-3xl tracking-tight transition-shadow ease-in-out hover:shadow-md">
      <h2 className="text-xl text-purple-500 font-semibold tracking-tight flex justify-between py-1">
        Activity{" "}
        <span className="text-gray-400 text-sm font-medium tracking-tight">
          3 appointment on this week
        </span>
      </h2>
      <div className="flex w-full justify-center mt-2 gap-4 overflow-x-auto">
        <BarChart
        
          barOne={"bg-blue"}
          barTwo={"bg-gray-300"}
          barThree={"bg-gray-300"}
          barFour={"bg-gray-300"}
          day={"Mon"}
        />
        <BarChart
        first={"bg-blue"}
          barOne={"bg-purple-400"}
          barTwo={"bg-gray-300"}
          barThree={"bg-gray-300"}
          barFour={"bg-blue"}
          day={"Tue"}
        />
        <BarChart
          barOne={"bg-gray-300"}
          barTwo={"bg-blue"}
          barThree={"bg-purple-400"}
          barFour={"bg-purple-400"}
          day={"Web"}
        />
        <BarChart
          barOne={"bg-purple-400"}
          barTwo={"bg-gray-300"}
          barThree={"bg-gray-300"}
          barFour={"bg-gray-300"}
          day={"Thurs"}
        />
        <BarChart
          barOne={"bg-purple-400"}
          barTwo={"bg-gray-300"}
          barThree={"bg-gray-300"}
          barFour={"bg-blue"}
          day={"Fri"}
        />
        <BarChart
          barOne={"bg-gray-300"}
          barTwo={"bg-blue"}
          barThree={"bg-purple-400"}
          barFour={"bg-purple-400"}
          day={"Sat"}
        />
        <BarChart
          barOne={"bg-blue"}
          barTwo={"bg-gray-300"}
          barThree={"bg-gray-300"}
          barFour={"bg-purple-400"}
          day={"Sun"}
        />
      </div>
    </div>
  );
};

export default ActivityCard;
