import React from 'react'
import moment from 'moment'
import events from '../hooks/events';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Calendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Add from '@containers/Add';
import '@styles/Calendar.scss';
import 'react-big-calendar/lib/css/react-big-calendar.css';

Calendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

// function Event({ event }) {
//   return (
//     <span>
//       <strong>{event.title}</strong>
//       {event.desc && ':  ' + event.desc}
//     </span>
//   )
// }

// function EventAgenda({ event }) {
//   return (
//     <span>
//       <em style={{ color: 'black', fontWeight: 'bold', fontSize: '24px' }}>{event.title}</em>
//       <p>{event.desc}</p>
//     </span>
//   )
// }

class Dnd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: events
		};

		this.moveEvent = this.moveEvent.bind(this);
	}

	moveEvent({ event, start, end }) {
		const { events } = this.state;
		const idx = events.indexOf(event);
		const updatedEvent = { ...event, start, end};

		const nextEvents = [...events];
		nextEvents.splice(idx, 1, updatedEvent);

		this.setState({
			events: nextEvents
		});
	}
	resizeEvent = (resizeType, { event, start, end }) => {
		const {events } = this.state;

		const nextEvents = events.map(existingEvent => {
			return existingEvent.id == event.id ? { ...existingEvent, start, end } : existingEvent;
		});

		this.setState({
			events: nextEvents
		});
	}

	handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

	render() {
		return (
			<div style={{ height: `${900}px` }} className="bigCalendar-container">
				<DragAndDropCalendar
					className="calendar"
					selectable
					events={this.state.events}
					onEventDrop={this.moveEvent}
					resizable
					scrollToTime={new Date(1970, 1, 1, 6)}
					onEventResize={this.resizeEvent}
					defaultView={Calendar.Views.MONTH}
					defaultDate={new Date(2022, 2, 10)}
					onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
					// components={{
      		// 	event: Event,
      		// 	agenda: {
        	// 		event: EventAgenda,
      		// 	},
    			// }}
					messages={{
					next:"Sig",
					previous:"Ant",
					today:"Today",
					month:"Month",
					week:"Week",
					day:"Day"
					}}
				/>
				<Add className="add"/>
			</div>
		);
	}
}

const Calendario = DragDropContext(HTML5Backend)(Dnd);

export default Calendario;
