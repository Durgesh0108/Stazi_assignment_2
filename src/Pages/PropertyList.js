import React, { useCallback, useEffect, useReducer, useState } from "react";
import Property from "../data";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";

import Detail from "../Components/Property/Details/Detail";
import Address from "../Components/Property/Address/Address";
import Rent from "../Components/Property/Rent/Rent";
import ImageRent from "../Components/Image_Rent/Image_Rent";
import Button from "../Components/Button/Button";

import { BsArrowRight } from "react-icons/bs";

const InitialState = {
	properties: Property,
	propertyPerPage: 6,
	propertyOnPage: [],
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
			propertyOnPage: currentListOfProperty,
			properties: state.properties,
			propertyPerPage: state.propertyPerPage,
		};
	}

	if (action.type === "SHOW_MORE") {
		const indexOfLastProperty = 1 * (state.propertyPerPage + action.value);
		const indexOfFirstProperty =
			indexOfLastProperty - (state.propertyPerPage + action.value);
		const currentListOfProperty = state.properties.slice(
			indexOfFirstProperty,
			indexOfLastProperty
		);
		return {
			propertyOnPage: currentListOfProperty,
			properties: state.properties,
			propertyPerPage: state.propertyPerPage + 3,
		};
	}

	if (action.type === "FILTER") {
		const newItem = action.property.filter((newVal) => {
			return newVal.location.city === action.curcity;
			// comparing category for displaying data
		});

		const indexOfLastProperty = 1 * action.propertyPerPage;
		const indexOfFirstProperty =
			indexOfLastProperty - action.propertyPerPage;
		const currentListOfProperty = newItem.slice(
			indexOfFirstProperty,
			indexOfLastProperty
		);

		return {
			propertyOnPage: currentListOfProperty,
			properties: newItem,
			propertyPerPage: state.propertyPerPage,
		};
	}
	return InitialState;
};

const PropertyList = () => {
	const [isActive, setIsActive] = useState(false);
	const [propertyList, dispatchPropertyList] = useReducer(
		PropertyListReducer,
		InitialState
	);

	const propertyLoadHandler = useCallback((propertyList) => {
		dispatchPropertyList({
			type: "LOAD_DATA",
			properties: propertyList,
		});
	}, []);

	useEffect(() => {
		propertyLoadHandler(Property);
	}, []);

	const showMoreHandler = () => {
		dispatchPropertyList({
			type: "SHOW_MORE",
			value: 3,
		});
	};

	const filterItem = (curcity) => {
		setIsActive(true);
		dispatchPropertyList({
			type: "FILTER",
			property: Property,
			curcity,
			propertyPerPage: 6,
		});
	};

	const cities = [...new Set(Property.map((Val) => Val.location.city))];

	// console.log(propertyList.properties.length);
	// console.log(propertyList.propertyOnPage.length);

	// if (
	// 	(propertyList.properties.length > propertyList.propertyOnPage.length)
	// ) {
	// 	setDataAvailable(false);
	// }

	return (
		<div className="bg-slate-300 ">
			<div className="container m-auto py-8 px-10 flex flex-col gap-y-5">
				<Header />
				<div className="flex justify-between items-center">
					<div className="flex gap-6 my-6 justify-between">
						{cities.map((city, id) => {
							return (
								<Button
									className={`bg-slate-200 border-none text-black px-6 ${
										isActive ? "bg-indigo-600" : ""
									}`}
									onClick={() => filterItem(city)}
									key={id}
								>
									{city}
								</Button>
							);
						})}
					</div>
					<div>
						<Button
							className="flex items-center gap-3 px-4"
							onClick={() => propertyLoadHandler(Property)}
						>
							<span>View All</span><BsArrowRight/>
						</Button>
					</div>
				</div>

				<ul className="grid grid-cols-3 gap-6">
					{propertyList.propertyOnPage.map((property) => (
						<Link to={`/property/${property.id}`}>
							<Card>
								<li key={property.id}>
									<ImageRent property={property} height="h-[300px]" divheight="h-[330px]" />

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
				<Button onClick={showMoreHandler} className='w-fit self-center text-white px-4 bg-indigo-600'>Show More</Button>
			</div>
		</div>
	);
};

export default PropertyList;
