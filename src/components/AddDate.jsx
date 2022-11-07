import React, {useState, useContext} from 'react';
import events from '@hooks/events.js';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import confetti from '@img/confettil.gif'
import Alert from '@mui/material/Alert';
import '@styles/AddDate.scss';

const styleAlert = {
	fontWeight: 800,

}

const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4,
};

let idCounter = 0;

function uniqueId(prefix) {
	var id = ++idCounter + '';
	return prefix ? prefix + id : id;
};

const AddDate = () => {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

		if(info.start > info.end) {
			console.log("Las fechas no coinciden")
		} else {
			events.push(info);
		}
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
					<button type="button" value="Create" className="primary-button create-button" onClick={handlePush}>
						<p onClick={handleOpen}>Create</p>
					</button>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Box sx={style}>
								{date < dateEnd ?
								<Alert style={styleAlert} variant="filled" severity="success">
									Your activity has been successfully created
								</Alert> : <Alert variant="filled" severity="error">
        					Your activity has the wrong date
      					</Alert>}
							</Box>
						</Modal>
				</form>
			</div>
		</div>
	);
};

export default AddDate;

								{/* <Typography id="modal-modal-title" variant="h6" component="h2">
									<div className="container-activity">
										<p className="text-activity">Activity has been created</p>
										<img src={confetti} className="confetti" />
									</div>
								</Typography> */}
