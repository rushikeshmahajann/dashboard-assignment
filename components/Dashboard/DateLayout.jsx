import React from "react";

const DateLayout = ({one, two, three, date, day, timeOne, timeTwo, timeThree, opacity}) => {
  return (
    <div className="w-full flex gap-1 flex-col items-center justify-center tracking-tight hover:bg-purple-200 rounded-3xl py-4 transition-colors ease-in-out">
      <div>
        <h5 className="text-xs text-purple-500 mb-2">{day}</h5>
        <p className="text-purple-500 font-medium text-lg">{date}</p>
      </div>

      <p style={{opacity: opacity}} className={one ? "text-xs text-white bg-purple-400 px-3 py-2 rounded-xl" : "text-xs text-purple-500 hover:bg-purple-400 hover:text-white transition-colors ease-in-out px-3 py-2 rounded-xl"}>{timeOne}</p>
      <p style={{opacity: opacity}} className={two ? "text-xs text-white bg-purple-400 px-3 py-2 rounded-xl" : "text-xs text-purple-500 hover:bg-purple-400 hover:text-white transition-colors ease-in-out px-3 py-2 rounded-xl"}>{timeTwo}</p>
      <p  style={{opacity: opacity}} className={three ? "text-xs text-white bg-purple-400 px-3 py-2 rounded-xl" : "text-xs text-purple-500 hover:bg-purple-400 hover:text-white transition-colors ease-in-out px-3 py-2 rounded-xl"}>{timeThree}</p>
    </div>
  );
};

export default DateLayout;
