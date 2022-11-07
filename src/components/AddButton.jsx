import React from 'react';
import Button from '@mui/material/Button';
import AddD from '@img/add3.png';

const styleButton = {
	borderRadius: 25,
}

const AddButton = ({handleOpen, handleClose}) => {
	return (
		<div className="button-add">
				<Button sx={styleButton} variant="contained" color="secondary" onClick={handleOpen}>
					<p className="text">
						Add
					</p>
					<img className="image" src={AddD} />
				</Button>
			</div>
	);
};

export default AddButton;
