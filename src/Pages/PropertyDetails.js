import React from "react";
import Property from "../data";
import Card from "../Components/Card/Card";
import Detail from "../Components/Property/Details/Detail";
import Address from "../Components/Property/Address/Address";
import Rent from "../Components/Property/Rent/Rent";
import ImageRent from "../Components/Image_Rent/Image_Rent";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
	const { id } = useParams();
	const property = Property.find((property) => property.id === parseInt(id));

	return (
		<div className="bg-slate-300 h-screen">
			<div className="container m-auto py-2 px-8">
				<Card>
					<ImageRent property={property} divheight="h-[430px]" height="h-[400px]"/>

					<div className="flex flex-col gap-y-4 px-4">
						<Address property={property} />
						<Detail property={property} />
						<Rent property={property} />
					</div>
				</Card>
			</div>
		</div>
	);
};

export default PropertyDetails;
