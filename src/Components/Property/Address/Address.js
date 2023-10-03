import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Address = ({ property }) => {
	return (
		<div>
			<div className="flex gap-3 items-center">
				<CiLocationOn />
				<span>{property.location.street}</span>
			</div>
			<div>
				<span>{property.location.address}</span>
			</div>
		</div>
	);
};

export default Address;
