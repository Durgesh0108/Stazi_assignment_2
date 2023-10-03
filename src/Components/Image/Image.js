import React from "react";
import "./Image.css";

const Image = ({ property, height }) => {
	return (
		<div
			className={`w-full mb-4 rounded-lg ${height}`}
		>
			<img className="img rounded-lg" src={`/img/${property.image}.jpg`} alt="" />
		</div>
	);
};

export default Image;
