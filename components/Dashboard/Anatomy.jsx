import React from "react";

const Anatomy = () => {
  return (
    <div className="rounded-3xl bg-purple-100 w-full p-4 h-max flex justify-center items-center relative">
      <div className="absolute top-20 left-58 bg-purple-400 text-white text-sm tracking-tight px-4 py-2 rounded-xl"><p className="text-nowrap">❤️ Healthy Heart</p></div>
      <div className="absolute bottom-28 -left-1 bg-blue text-purple-500 text-sm tracking-tight px-4 py-2 rounded-xl"><p>🦵🏻 Healthy Leg</p></div>
      <img className="w-42 h-auto" src="/human.png" alt="Human anatomy" />
    </div>
  );
};

export default Anatomy;
