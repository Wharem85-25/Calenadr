import React from 'react';
import Title from '@components/Title.jsx';
import Calendar from '@components/Calendar.jsx';
import AddDate from '@components/AddDate.jsx';

const App = () => {
	return (
		<div className="container">
			<Title />
			<Calendar />
			<AddDate />
		</div>
	);
};

export default App;
