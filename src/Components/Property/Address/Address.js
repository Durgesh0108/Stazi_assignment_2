import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Address = ({ property }) => {
	return (
		<div>
			<div className="flex gap-3 items-center">
				<CiLocationOn fill="#946462" />
				<span>{property.location.street}</span>
			</div>
			<div>
				<span className="text-lg font-semibold">
					{property.name} - {property.location.address},{" "}
					{property.location.city}
				</span>
			</div>
		</div>
	);
};

export default Address;
