import React, {useState} from 'react';
import AddDate from '@components/AddDate.jsx';
import AddD from '@img/add.png'
import '@styles/Add.scss';

const Add = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<div className="container-add">
			<img className="image" src={AddD} onClick={handleToggle} />
			{toggle && <AddDate />}
		</div>
	);
};

export default Add;
