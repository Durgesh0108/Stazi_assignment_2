import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<button className="bg-indigo-600 rounded-xl p-2 px-4">
				<Link to={"/property"}>All Property</Link>
			</button>
		</div>
	);
};

export default Home;
