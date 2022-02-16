import React from 'react';
import '@styles/Categories.scss';

const Categories = () => {
	return (
		<div className="container-categories">
			<div>
				<label className="categories">
					Mathematics
					<div className="color color-math"></div>
				</label>
				<label className="categories">
					Communication
					<div className="color color-com"></div>
				</label>
				<label className="categories">
					Computing
					<div className="color color-comp"></div>
				</label>
				<label className="categories">
					Artistic expression
					<div className="color color-art"></div>
				</label>
				<label className="categories">
					History
					<div className="color color-his"></div>
				</label>
			</div>
		</div>
	);
};

export default Categories;
