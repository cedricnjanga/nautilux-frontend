import React from 'react';

import { formatDate } from '../helpers';

const TableDate = ({ createdAt }) => {
	const date = formatDate(new Date(createdAt));
	const [day, month] = date.split(' ');

	return (
		<div className='rounded text-white bg-dark font-weight-bold text-center'>
			<h3>{day}</h3>
			<p>{month}</p>
		</div>
	)
}

export default TableDate
