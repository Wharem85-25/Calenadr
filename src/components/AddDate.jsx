import React from 'react';
import '@styles/AddDate.scss';

const AddDate = () => {
	return (
		<div className="createDate">
			<div className="form-container">
				<h1 className="main-title">Create your activity</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="title" className="label">Title</label>
						<input type="text" id="title" placeholder="Homework" className="input input-title" />
						<label htmlFor="dateInit" className="label">Start Time</label>
						<input type="date" id="dateInit" placeholder="2022-02-22" className="input input-date" />
						<label htmlFor="dateEnd" className="label">Time of termination</label>
						<input type="date" id="dateEnd" placeholder="2022-02-24" className="input input-date" />
						<label htmlFor="description" className="label">Description</label>
						<input type="text" id="description" placeholder="Very important" className="input input-description" />
					</div>
					<input type="submit" value="Create" className="primary-button create-button" />
				</form>
			</div>
		</div>
	);
};

export default AddDate;
