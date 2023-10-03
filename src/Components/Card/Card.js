import React from "react";

const Card = (props) => {
	return (
		<div
			className={`bg-white rounded-xl p-3 shadow-2xl ${props.className}`}
		>
			{props.children}
		</div>
	);
};

export default Card;
