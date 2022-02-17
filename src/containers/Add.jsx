import React, {useState} from 'react';
import AddDate from '@components/AddDate.jsx';
import Categories from '@components/Categories.jsx';
import AddD from '@img/add2.png'
import '@styles/Add.scss';

const Add = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<div className="container-add">
			<button className="button-add" onClick={handleToggle}>
				<p className="text">
					Add your activity
				</p>
				<img className="image" src={AddD} />
			</button>
			{toggle && <AddDate />}
			<Categories />
		</div>
	);
};

export default Add;
