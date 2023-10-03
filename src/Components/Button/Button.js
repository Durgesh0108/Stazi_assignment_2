import React from "react";

const Button = (props) => {
	return (
		<button
			className={`rounded-full p-3 border-indigo-500 border-2 ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
