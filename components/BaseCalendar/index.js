import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!

export default function BaseCalendar() {
  const [eventsList, setEventsList] = useState([
    { title: "event 1", date: "2023-05-01" },
    {
      title: "event 2",
      date: "2023-05-02T12:30:00",
      duration: "05:30",
      backgroundColor: "red",
      editable: true,
    },
  ]);

  const handleDateClick = (arg) => {
    // bind with an arrow function
    console.log(arg);
    console.log(eventsList);
    setEventsList([...eventsList, { title: "event 3", date: arg.dateStr }]);
    // alert(arg.dateStr);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      // initialView="dayGridMonth"
      weekends={true}
      events={eventsList}
      aspectRatio={1.5}
      expandRows={true}
      contentHeight={"auto"}
      dateClick={handleDateClick}
      businessHours={{
        // days of week. an array of zero-based day of week integers (0=Sunday)
        daysOfWeek: [1, 2, 3, 4], // Monday - Thursday

        startTime: "10:00", // a start time (10am in this example)
        endTime: "18:00", // an end time (6pm in this example)
      }}
    />
  );
}
