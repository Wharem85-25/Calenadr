import React from 'react';
import {Calendar, momentLocalizer} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
require("moment/locale/es-mx");

const localizer = momentLocalizer(moment)
const myEventsList = [
  {
    title: "today",
    start: new Date("2019-05-05 10:22:00"),
    end: new Date("2019-05-05 10:42:00"),
  },
  {
    title: "string",
    start: new Date("2019-05-05 12:22:00"),
    end: new Date("2019-05-05 13:42:00"),
  },
]

const Calendario = () => {
	return (
		<div style={{ height: `${800}px` }} className="bigCalendar-container">
			<Calendar
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
				messages={{
					next:"sig",
					previous:"ant",
					today:"Hoy",
					month:"Mes",
					week:"Semana",
					day:"Dia"
				}}
			/>
		</div>
	);
};

export default Calendario;

