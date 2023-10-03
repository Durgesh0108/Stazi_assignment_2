import React from "react";

import Image from "../Image/Image";

import { BsHeart } from "react-icons/bs";
import Button from "../Button/Button";

const ImageRent = ({ property, divheight, height }) => {
	return (
		<div className={divheight}>
			<Image property={property} height={height} />
			<div className="absolute top-10 w-11/12">
				<div className="flex px-3 w-full justify-between">
					<Button
						className={
							"bg-white border-none px-4 text-indigo-500 font-semibold"
						}
					>
						For {property.isFor}
					</Button>
					<Button
						className={"bg-white border-none p-4 text-indigo-500"}
					>
						<BsHeart className="font-bold" />
					</Button>
				</div>
			</div>
			{property.isPopular && (
				<div className="bg-indigo-600 text-white font-semibold w-1/2 p-1  text-center rounded-lg relative -top-20 -left-6">
					Popular
				</div>
			)}
		</div>
	);
};

export default ImageRent;
