import React from "react";

const Button = (props) => {
	return (
		<button
			className={`${props.className} rounded-full p-3 border-indigo-600 text-indigo-600 font-semibold border-2 `}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
