import React from "react";
import Bell from "../../icons/Bell";
import Search from "../../icons/Search";

const Input = () => {
  return (
    <div className="w-full lg:max-w-[40rem] flex items-center justify-between gap-4 border-1 rounded-lg border-gray-300 px-3 py-2 ">
      <div className="flex items-center w-full gap-4">
        <button className="stroke-gray-600">
          <Search />
        </button>
        <input className="text-lg w-full focus:ring-0 focus:outline-0" type="text" placeholder="Search" />
      </div>
      <button className="stroke-purple-500">
        <Bell />
      </button>
    </div>
  );
};

export default Input;
