import React from 'react';
import title from '@img/title.jpg';
import '@styles/Title.scss';

const Title = () => {
	return (
		<div className="container-title">
			<img src={title} alt="fondo" className="image"></img>
			<p className="title">Calendar</p>
		</div>
	);
};

export default Title;
