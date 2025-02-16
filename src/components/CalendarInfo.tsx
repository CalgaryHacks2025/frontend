import React from "react";
import calendarIcon from "../assets/calendar.svg";

interface CalendarInfoProps {
  date: string;
  location: string;
}

const CalendarInfo: React.FC<CalendarInfoProps> = ({ date, location }) => {
  return (
    <div className="flex items-center pb-1.5">
      <img
        src={calendarIcon}
        alt="calendar icon"
        className="w-5 h-5 cursor-pointer mr-3"
      />
      <div>
        <h2>
          {date} • {location}
        </h2>
      </div>
    </div>
  );
};

export default CalendarInfo;
