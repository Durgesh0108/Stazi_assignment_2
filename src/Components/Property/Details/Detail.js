import React from 'react'

import { BsBuildings, BsArrowsMove } from "react-icons/bs";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";

const Detail = ({property}) => {
  return (
		<div className="flex justify-around">
			<div className="flex flex-col items-center">
				<BsBuildings />
				<span>{property.rooms} Room</span>
			</div>
			<div className="flex flex-col items-center">
				<LiaBedSolid />
				<span>{property.bed} Bed</span>
			</div>
			<div className="flex flex-col items-center">
				<LiaBathSolid />
				<span>{property.bathroom} Bath</span>
			</div>
			<div className="flex flex-col items-center">
				<BsArrowsMove />
				<span>{property.area} sft</span>
			</div>
		</div>
  );
}

export default Detail
