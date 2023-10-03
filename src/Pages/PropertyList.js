import React, { useCallback, useEffect, useReducer } from "react";
import Property from "../data";

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

	const listOfProperty = useCallback((propertyList) => {
		dispatchPropertyList({
			type: "LOAD_DATA",
			properties: propertyList.properties,
		});
	},[]);

	useEffect(() => {
		listOfProperty(propertyList);
	}, []);

	const showMoreHandler = () => {
		dispatchPropertyList({ type: "SHOW_MORE", value: 3, property: Property });
		console.log(propertyList.propertyPerPage)
		console.log(propertyList.properties)
	};

	return (
		<div>
			Property List
			<ul>
				{propertyList.properties.map((property) => (
					<li key={property.id}>
						<h1>{property.id}</h1>
						<p>{property.rent}</p>
					</li>
				))}
			</ul>
			<button onClick={showMoreHandler}>Show More</button>
		</div>
	);
};

export default PropertyList;
