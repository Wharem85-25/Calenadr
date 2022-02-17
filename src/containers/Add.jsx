import * as React from 'react';
import AddDate from '@components/AddDate.jsx';
import Categories from '@components/Categories.jsx';
import AddD from '@img/add2.png';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import '@styles/Add.scss';

const styleButton = {
	borderRadius: 25,
}

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

const Add = () => {
		const [open, setOpen] = React.useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);

	return (
		<div className="container-add">
			<div className="button-add">
				<Button sx={styleButton} variant="contained" color="secondary" onClick={handleOpen}>
					<p className="text">
						Add your activity
					</p>
					<img className="image" src={AddD} />
				</Button>
			</div>
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
			<Categories />
		</div>
	);
};

export default Add;
