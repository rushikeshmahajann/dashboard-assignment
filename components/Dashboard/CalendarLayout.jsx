import React from "react";
import LeftThin from "../../icons/LeftThin";
import RightThin from "../../icons/RightThin";
import DateLayout from "./DateLayout";

const CalendarLayout = () => {
  return (
    <div className="animate w-full max-w-[40rem] mt-10 p-4">
      {/* Calendar Label */}
      <div className="flex justify-between mb-4 w-full items-center">
        <h3 className="tracking-tight text-base font-medium">May 2025</h3>
        <div className="stroke-purple-500 flex gap-2 items-center">
          <LeftThin />
          <RightThin />
        </div>
      </div>

      {/* Table */}
      <div className="flex w-full justify-between items-center gap-2">
        <DateLayout
          date={"19"}
          day={"Mon"}

          timeOne={"10:00"}
          timeTwo={"11:00"}
          timeThree={"12:00"}
        />
        <DateLayout
          date={"19"}
          day={"Mon"}
          one={false}
          two={true}
          three={false}
          timeOne={"08:00"}
          timeTwo={"09:00"}
          timeThree={"10:00"}
        />
        <DateLayout
          date={"20"}
          day={"Tue"}

          timeOne={"12:00"}
          timeTwo={"---"}
          timeThree={"13:00"}
        />
        <DateLayout
          date={"21"}
          day={"Wed"}
          one={false}
          two={true}
          three={false}
          timeOne={"10:00"}
          timeTwo={"11:00"}
          timeThree={"---"}
          opacity="50%"
        />
        <DateLayout
          date={"22"}
          day={"Thur"}

          timeOne={"---"}
          timeTwo={"14:00"}
          timeThree={"16:00"}
        />
        <DateLayout
          date={"23"}
          day={"Fri"}
          one={true}
          two={false}
          three={false}
          timeOne={"12:00"}
          timeTwo={"14:00"}
          timeThree={"15:00"}
          opacity="50%"
        />
        <DateLayout
          date={"24"}
          day={"Sat"}
          one={true}
          two={false}
          three={false}
          timeOne={"09:00"}
          timeTwo={"10:00"}
          timeThree={"11:00"}
          opacity="50%"
        />
      </div>
    </div>
  );
};

export default CalendarLayout;
