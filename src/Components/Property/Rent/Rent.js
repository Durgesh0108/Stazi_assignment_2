import React from 'react'
import Button from '../../Button/Button';

const Rent = ({property}) => {
  return (
		<div className="flex justify-between p-3 items-center">
			<div>
				<span className='text-xl font-semibold text-indigo-600'>${property.rent}</span>
				<span>/month</span>
			</div>
			<div>
				<Button className="">Read More</Button>
			</div>
		</div>
  );
}

export default Rent
