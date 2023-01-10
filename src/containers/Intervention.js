import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import * as types from '../types';
import { getIntervention } from '../selectors';

export default function Intervention() {
	const dispatch = useDispatch();
	const { interventionId } = useParams();
	const intervention = useSelector(getIntervention(interventionId)) || {};

	useEffect(() => {
		dispatch({ type: types.GET_INTERVENTIONS });
	}, [dispatch]);

	return (
		<div className='mx-auto w-50'>
			<Link to={'/'}>
				<button className='btn btn-light border mb-4'>
					Retour
				</button>
			</Link>

			<div className='border rounded p-2'>
				<h2 className='font-weight-bold'>{intervention.name}</h2>

				<div>
					<p className='font-weight-bold'>DESCRIPTION</p>
					<p>{intervention.description}</p>
				</div>

				<div>
					<p className='font-weight-bold'>DEMANDEUR</p>
					<p>{intervention.sender_name}</p>
					<p>{intervention.sender_email}</p>
					<p>{intervention.sender_phone}</p>
				</div>
			</div>
		</div>
	)
}
