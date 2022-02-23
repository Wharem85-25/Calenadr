import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AddDate from '@components/AddDate';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
	height: 600,
  bgcolor: 'background.paper',
  boxShadow: 28,
  p: 6,
};

const EventCalendar = () => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(true);
	return (
		<div>
			<Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
			>
				<Fade in={open}>
					<Box sx={style}>
						<AddDate />
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default EventCalendar;
