import React, {useState} from 'react'
import Categories from '@components/Categories.jsx';
import AddButton from '@components/AddButton'
import AddDate from '@components/AddDate';
import Button from '@mui/material/Button';
import AddD from '@img/add3.png';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import '@styles/Add.scss';

// const styleButton = {
// 	borderRadius: 25,
// }

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 300,
// 	height: 600,
//   bgcolor: 'background.paper',
//   boxShadow: 28,
//   p: 6,
// };


const Add = ({isOpen, handleOpen,handleClose}) => {
// 	const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true)

	return (
		<div className="container-add">
			{/* <AddButton handleOpen={handleOpen} /> */}
			{/* <Categories /> */}
			{/* <div className="button-add">
				<Button sx={styleButton} variant="contained" color="secondary" onClick={handleOpen}>
					<p className="text">
						Add
					</p>
					<img className="image" src={AddD} />
				</Button>
			</div> */}

			{/* <Modal
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
			</Modal> */}

		</div>
	);
};

export default Add;
