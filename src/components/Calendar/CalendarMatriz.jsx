import React, { useEffect, useState } from "react";
import { cn, generateDate, months } from "../../utils/calendar";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const CalendarMatriz = ({
  today,
  currentDate,
  days,
  selectDate,
  setSelectDate,
  setToday,
  setColorDays = (day = null) => null,
}) => {
  return (
    <div
      className={`h-min ${setColorDays() ? "w-full" : "lg:w-[60%] md:w-[80%]"}`}
    >
      <div className="flex justify-between items-center">
        <h1 className="select-none font-semibold">
          {months[today.month()]}, {today.year()}
        </h1>
        <div className="flex gap-10 items-center ">
          <GrFormPreviousLink
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />
          <h1
            className=" cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(currentDate);
            }}
          >
            Hoy
          </h1>
          <GrFormNextLink
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-7 ">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          );
        })}
      </div>

      <div className=" grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="p-2 text-center h-14 grid place-content-center text-sm border-t"
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-blue-200 text-white" : "",
                    !setColorDays(date) ? "" : setColorDays(date),
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",

                    "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default CalendarMatriz;
