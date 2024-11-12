"use client";
import React, { useState } from "react";
import { Calendar, CalendarProvider } from "zaman";

import { LuMoreVertical } from "react-icons/lu";

const eventsData = [
  {
    id: 1,
    title: "رویداد شماره 1",
    time: "12:00 PM - 2:00 PM",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: 2,
    title: "رویداد شماره 2",
    time: "12:00 PM - 2:00 PM",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
  {
    id: 3,
    title: " رویداد شماره 3",
    time: "12:00 PM - 2:00 PM",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  },
];
const EventCalendar = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <div className="bg-white p-4 rounded-md shadow  relative  border border-gray-300">
      <CalendarProvider
        locale="fa"
        round="x4"
        accentColor="#6374ae"
        // direction="ltr"
      >
        <Calendar
          defaultValue={calendarValue}
          onChange={(e) => setCalendarValue(new Date(e.value))}
        />
      </CalendarProvider>
      <div className=" flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">رویداد ها</h1>

        <LuMoreVertical width={20} height={20} className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4">
        {eventsData.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100  border-t-4 odd:border-t-lamaSky even:border-t-lamaPruple"
            key={event.id}
          >
            <div className="flex items-center  justify-between">
              <h1 className="font-semibold text-gray-500">{event.title}</h1>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EventCalendar;
