import React, {useState} from 'react';
import events from '@hooks/events.js';
import change from '@hooks/ChangeColor.js';
import '@styles/AddDate.scss';

let idCounter = 0;

function uniqueId(prefix) {
	var id = ++idCounter + '';
	return prefix ? prefix + id : id;
};

const AddDate = () => {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [dateEnd, setDateEnd] = useState('');
	const [descr, setDesc] = useState('');
	const [cour, setCour] = useState('');

	const handlePush = () => {

		let info = {
			id: uniqueId(),
			title: title,
			start: new Date(date),
			end: new Date(dateEnd),
			desc: descr,
			course: cour
		}

		// if(info.course == "Mathematics") {
		// 	let mat = document.getElementsByClassName('rbc-event')
		// 	mat.setAttribute("style", "background-color: red;");
		// } else if (info.course == "History") {
		// 	let his = document.getElementsByClassName('rbc-event');
		// 	his.setAttribute("style", "background-color: rgb(5, 126, 35);");
		// } else if (info.course == "Communication") {
		// 	let com = document.getElementsByClassName('rbc-event');
		// 	com.setAttribute("style", "background-color: rgb(255, 145,0);");
		// } else if (info.course == "Artistic expression") {
		// 	let art = document.getElementsByClassName('rbc-event');
		// 	art.setAttribute("style", "background-color: rgb(207, 0, 226);");
		// } else if (info.course == "Computing") {
		// 	let comp = document.getElementsByClassName('rbc-event');
		// 	comp.setAttribute("style", "background-color: 'blue';");
		// }

		events.push(info);
		console.log(info.course)
		// change();
	}

	return (
		<div className="createDate">
			<div className="form-container">
				<h1 className="main-title">Create your activity</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="title" className="label">Title</label>
						<input onChange={event => setTitle(event.target.value)} type="text" id="title" placeholder="Homework" className="input input-title" />
						<label htmlFor="dateInit" className="label">Start Time</label>
						<input onChange={event => setDate(event.target.value)} type="datetime-local" id="dateInit" placeholder="2022-02-22" className="input input-date" />
						<label htmlFor="dateEnd" className="label">Time of termination</label>
						<input onChange={event => setDateEnd(event.target.value)} type="datetime-local" id="dateEnd" placeholder="2022-02-24" className="input input-date" />
						<label htmlFor="description" className="label">Description</label>
						<input onChange={event => setDesc(event.target.value)} type="text" id="description" placeholder="Very important" className="input input-description" />
						<label htmlFor="description" className="label">Course</label>
						<input onChange={event => setCour(event.target.value)} placeholder="Courses" type="text" id="course" multiple name="courses" list="drawcourse" className="input input-description" />
						<datalist id="drawcourse">
							<option id="mat" value="Mathematics"></option>
							<option id="his" value="History"></option>
							<option id="com" value="Communication"></option>
							<option id="art" value="Artistic expression"></option>
							<option id="comp" value="Computing"></option>
						</datalist>
					</div>
					<input type="button" value="Create" className="primary-button create-button" onClick={handlePush} />
				</form>
			</div>
		</div>
	);
};

export default AddDate;
