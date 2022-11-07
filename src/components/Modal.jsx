import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

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

const Modal = () => {
	return (
		<Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
			>
				<Fade in={isOpen}>
					<Box sx={style}>
						<AddDate />
					</Box>
				</Fade>
			</Modal>
	);
};

export default Modal;
