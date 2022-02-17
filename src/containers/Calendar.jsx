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

	render() {
		return (
			<div style={{ height: `${900}px` }} className="bigCalendar-container">
				<DragAndDropCalendar
					className="calendar"
					selectable
					events={this.state.events}
					onEventDrop={this.moveEvent}
					resizable
					onEventResize={this.resizeEvent}
					defaultView={Calendar.Views.MONTH}
					defaultDate={new Date(2022, 2, 10)}
					messages={{
					next:"Sig",
					previous:"Ant",
					today:"Hoy",
					month:"Mes",
					week:"Semana",
					day:"Dia"
				}}
				/>
				<Add className="add"/>
			</div>
		);
	}
}

const Calendario = DragDropContext(HTML5Backend)(Dnd);

export default Calendario;
