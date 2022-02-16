import React from 'react';
import Title from '@components/Title.jsx';
import Calendar from '@components/Calendar.jsx';
import Add from '../containers/Add';

const App = () => {
	return (
		<div className="container">
			<Title />
			<Add />
			<Calendar />
		</div>
	);
};

export default App;
