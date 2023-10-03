import React from "react";

import Image from "../Image/Image";

import { BsHeart } from "react-icons/bs";
import Button from "../Button/Button";

const ImageRent = ({ property }) => {
	return (
		<div className="h-[330px]">
			<Image property={property} height={"h-[300px]"} />
			<div className="flex justify-between px-3 relative -top-64">
				<Button
					className={
						"bg-white border-none px-4 text-indigo-500 font-semibold"
					}
				>
					For {property.isFor}
				</Button>
				<Button className={"bg-white border-none p-4 text-indigo-500"}>
					<BsHeart className="font-bold" />
                </Button>
            </div>
            {property.isPopular && <div className="bg-indigo-600 text-white font-semibold w-1/2 p-1  text-center rounded-lg relative -top-20 -left-6">
                Popular
            </div>}
		</div>
	);
};

export default ImageRent;
