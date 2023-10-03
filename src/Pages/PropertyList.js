import React, { useCallback, useEffect, useReducer, useState } from "react";
import Property from "../data";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import Image from "../Components/Image/Image";

import { CiLocationOn } from 'react-icons/ci';

const InitialState = {
	properties: Property,
	propertyPerPage: 6,
};

const PropertyListReducer = (state, action) => {
	if (action.type === "LOAD_DATA") {
		const indexOfLastProperty = 1 * state.propertyPerPage;
		const indexOfFirstProperty =
			indexOfLastProperty - state.propertyPerPage;
		const currentListOfProperty = action.properties.slice(
			indexOfFirstProperty,
			indexOfLastProperty
		);
		return {
			properties: currentListOfProperty,
			propertyPerPage: state.propertyPerPage,
		};
	}

	if (action.type === "SHOW_MORE") {
		const indexOfLastProperty = 1 * (state.propertyPerPage + action.value);
		const indexOfFirstProperty =
			indexOfLastProperty - (state.propertyPerPage + action.value);
		const currentListOfProperty = action.property.slice(
			indexOfFirstProperty,
			indexOfLastProperty
		);
		return {
			properties: currentListOfProperty,
			propertyPerPage: state.propertyPerPage + 3,
		};
	}
	return InitialState;
};

const PropertyList = () => {
	// const [dataAvailable, setDataAvailable] = useState(true)
	const [propertyList, dispatchPropertyList] = useReducer(
		PropertyListReducer,
		InitialState
	);

	const propertyLoadHandler = useCallback((propertyList) => {
		dispatchPropertyList({
			type: "LOAD_DATA",
			properties: propertyList.properties,
		});
	}, []);

	useEffect(() => {
		propertyLoadHandler(propertyList);
	}, []);

	const showMoreHandler = () => {
		dispatchPropertyList({
			type: "SHOW_MORE",
			value: 3,
			property: Property,
		});
		console.log(propertyList.propertyPerPage);
		console.log(propertyList.properties);
	};

	// if (propertyList.properties.length() < propertyList.propertyPerPage)
	// {
	// 	setDataAvailable(false)
	// }
	return (
		<div className="bg-slate-300 ">
			<div className="container m-auto py-8">
				<Header />
				<div className="flex gap-6 my-6">
					<button
						value="New York"
						className="rounded-3xl bg-white p-2 px-4"
					>
						New York
					</button>
					<button
						value="Mumbai"
						className="rounded-3xl bg-white p-2 px-4"
					>
						Mumbai
					</button>
					<button
						value="Paris"
						className="rounded-3xl bg-white p-2 px-4"
					>
						Paris
					</button>
					<button
						value="London"
						className="rounded-3xl bg-white p-2 px-4"
					>
						London
					</button>
				</div>
				<ul className="grid grid-cols-3 gap-4">
					{propertyList.properties.map((property) => (
						<Link to={`/property/${property.id}`}>
							<Card>
								<li key={property.id}>
									<div>
										<Image
											property={property}
											height={"h-[300px]"}
										/>
										<div></div>
									</div>
									<div className="flex gap-3 ali">
										<CiLocationOn/>
										<span>{property.location.street}</span>
									</div>
									<div>
										<span>{property.location.address}</span>
									</div>
									<div className="flex gap-3">
										<div>
											<span>{property.rooms}</span>
										</div>
										<div>
											<span>{property.bed}</span>
										</div>
										<div>
											<span>{property.bathroom}</span>
										</div>
										<div>
											<span>{property.area}</span>
										</div>
									</div>
									<div>
										<div>
											<span>${property.rent}</span>
											<span>/month</span>
										</div>
										<div>
											{/* <Button/> */}
										</div>
									</div>
								</li>
							</Card>
						</Link>
					))}
				</ul>
				{<button onClick={showMoreHandler}>Show More</button>}
			</div>
		</div>
	);
};

export default PropertyList;
