import React from 'react';
import title from '@img/title5.jpg';
import '@styles/Title.scss';

const Title = () => {
	return (
		<div className="container-title">
			<img src={title} className="fondo" alt="fondo"></img>
			<h1 className="title">Calendar</h1>
		</div>
	);
};

export default Title;
