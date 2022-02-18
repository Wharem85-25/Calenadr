import React, {useState} from 'react';
import '@styles/AddDate.scss';
import events from '@hooks/events.js';

const AddDate = () => {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [dateEnd, setDateEnd] = useState('');
	const [descr, setDesc] = useState('');

	const handlePush = () => {
		let info = {
			id: 3,
			title: title,
			start: date,
			end: dateEnd,
			desc: descr
		}

		events.push(info);
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
						<input onChange={event => setDate(event.target.value)} type="date" id="dateInit" placeholder="2022-02-22" className="input input-date" />
						<label htmlFor="dateEnd" className="label">Time of termination</label>
						<input onChange={event => setDateEnd(event.target.value)} type="date" id="dateEnd" placeholder="2022-02-24" className="input input-date" />
						<label htmlFor="description" className="label">Description</label>
						<input onChange={event => setDesc(event.target.value)} type="text" id="description" placeholder="Very important" className="input input-description" />
					</div>
					<input type="button" value="Create" className="primary-button create-button" onClick={handlePush} />
				</form>
			</div>
		</div>
	);
};

export default AddDate;
