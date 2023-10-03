import React, { useCallback, useEffect, useReducer } from "react";
import Property from "../data";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";

import Detail from "../Components/Property/Details/Detail";
import Address from "../Components/Property/Address/Address";
import Rent from "../Components/Property/Rent/Rent";
import ImageRent from "../Components/Image_Rent/Image_Rent";

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

	return (
		<div className="bg-slate-300 ">
			<div className="container m-auto py-8 px-10">
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
				<ul className="grid grid-cols-3 gap-6">
					{propertyList.properties.map((property) => (
						<Link to={`/property/${property.id}`}>
							<Card>
								<li key={property.id}>
									<ImageRent property={property} />

									<div className="flex flex-col gap-y-4 px-4">
										<Address property={property} />
										<Detail property={property} />
										<Rent property={property} />
									</div>
								</li>
							</Card>
						</Link>
					))}
				</ul>
				<button onClick={showMoreHandler}>Show More</button>
			</div>
		</div>
	);
};

export default PropertyList;
