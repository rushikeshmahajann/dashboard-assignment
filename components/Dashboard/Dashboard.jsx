import React from "react";

import Input from "./Input";
import ArrowDown from "../../icons/ArrowDown";
import { vitals } from "../../src/data/Vitals";
import VitalsCard from "./VitalsCard";
import ArrowRight from "../../icons/ArrowRight";
import Anatomy from "./Anatomy";
import ActivityCard from "./ActivityCard";
import CalendarLayout from "./CalendarLayout";
import Plus from "../../icons/Plus";
import ScheduleCard from "./ScheduleCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 w-full h-full overflow-y-auto 2xl:overflow-y-hidden">
      <section className="pt-14 px-6 w-full">
        <div className="flex items-center">
          <Input />
          <div className="w-full flex justify-end items-center gap-4 2xl:hidden">
            <div className="w-10 h-10 rounded-lg bg-blue flex justify-center items-center">
              {" "}
              <img className="w-8" src="/avatar.webp" alt="" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-400 hover:bg-purple-500 transition-colors ease-in-out flex justify-center items-center stroke-white">
              {" "}
              <Plus />
            </div>
          </div>
        </div>
        {/* DashBoard Heading */}
        <div className="w-full flex justify-between items-end pt-8">
          <h2 className="tracking-tight text-3xl font-semibold text-purple-500">
            Dashboard
          </h2>
          <a className="flex gap-2 text-sm items-center tracking-tight" href="">
            This Week{" "}
            <span className="stroke-purple-500">
              <ArrowDown />
            </span>
          </a>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2  mt-4">
          {/* Anatomy Card */}
          <Anatomy />
          {/* Health Status Cards */}
          <div className="flex flex-col justify-center items-center gap-2 mx-auto w-full">
            {vitals &&
              vitals.map((item) => (
                <VitalsCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  percentage={item.percentage}
                  date={item.date}
                  bg={item.bg}
                />
              ))}
          </div>
        </div>
        <a
          className="text-purple-500 tracking-tight text-sm flex justify-end stroke-purple-500 items-center gap-1 my-2"
          href=""
        >
          Details{" "}
          <span>
            <ArrowRight />
          </span>
        </a>

        {/* Activity Card */}
        <ActivityCard />
      </section>
      <section className="bg-purple-100 pt-14 px-6 w-full">
        {/* Profile Links */}
        <div className="w-full hidden 2xl:flex justify-end items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue flex justify-center items-center">
            {" "}
            <img className="w-8" src="/avatar.webp" alt="" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-purple-400 hover:bg-purple-500 transition-colors ease-in-out flex justify-center items-center stroke-white">
            {" "}
            <Plus />
          </div>
        </div>
        {/* Calendar */}
        <CalendarLayout />

        {/* Appointments */}
        <div className="flex gap-4 w-full">
          <div className="rounded-4xl tracking-tight bg-purple-400 text-white py-5 px-6  w-full max-w-sm">
            <h3 className="flex justify-between items-center font-medium text-lg">
              Dentist <span className="text-2xl">🦷</span>
            </h3>
            <time className="font-light opacity-80 text-sm">09:00 - 11:00</time>
            <p className="font-light opacity-80 text-sm">
              Dr. Camerom Williamson
            </p>
          </div>

          <div className="rounded-4xl tracking-tight bg-purple-300 text-purple-500 py-5 px-6  w-full">
            <h3 className="flex justify-between items-center font-medium text-lg">
              Physiotheraphy Appointment <span className="text-2xl">💪🏻</span>
            </h3>
            <time className="font-light opacity-80 text-sm">11:00-12:00</time>
            <p className="font-light opacity-80 text-sm">Dr. Kevin Djones</p>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <h3 className="tracking-tight text-purple-500 text-xl font-semibold my-6">
          The Upcoming Schedule
        </h3>
        <h4 className="tracking-tight font-medium text-gray-400 text-lg mb-2 mt-4">
          On Thursday
        </h4>
        <div className="w-full flex gap-4 justify-between items-center">
          <ScheduleCard
            title={"Health checkup complete"}
            time={"11:00 AM"}
            icon={"💉"}
          />
          <ScheduleCard
            title={"Ophthalmologist"}
            time={"14:00 PM"}
            icon={"👁️"}
          />
        </div>

        <h4 className="tracking-tight font-medium text-gray-400 text-lg mb-2 mt-4">
          On Saturday
        </h4>
        <div className="w-full flex gap-4 justify-between items-center">
          <ScheduleCard title={"Cardiologist"} time={"11:00 AM"} icon={"❤️"} />
          <ScheduleCard title={"Neurologist"} time={"16:00 PM"} icon={"👨🏻‍⚕️"} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
