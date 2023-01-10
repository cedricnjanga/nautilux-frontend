import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as types from '../types';

const RequiredFeedBack = () => (
	<div className="invalid-feedback">
		doit etre rempli
	</div>
)

export default function InterventionForm() {
	const dispatch = useDispatch();
	const history = useHistory()
	const formRef = useRef(null);

	const onSubmit = e => {
		e.preventDefault()

		const form = formRef.current;

		form.classList.add('was-validated')

		const inputs = Array.from(form.querySelectorAll('input, textarea'));
		const isValid = inputs.every(input => input.validity.valid);

		if (!isValid) return

		dispatch({ type: types.CREATE_INTERVENTION, payload: new FormData(form), history });
	}

	return (
		<div className='mx-auto w-50'>
			<div className='mb-4' style={styles.actionSection}>
				<Link to='/'>
					<button className='btn btn-light border'>
						Retour
					</button>
				</Link>
				<button
					type='submit'
					form='intervention_form'
					className='btn text-warning font-weight-bold border border-warning'
					style={styles.submitBtn}
					onClick={onSubmit}
				>
					Creer
				</button>
			</div>

			<form id='intervention_form' ref={formRef}>
				<div className="form-group">
					<label htmlFor="name">Nom de l'intevention</label>
					<input type="text" className="form-control" name="name" id="name" placeholder="Nom" required />
					<RequiredFeedBack />
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea type="text" className="form-control" name="description" id="description" placeholder="Saisissez la description de l'intervention" required />
					<RequiredFeedBack />
				</div>
				<div className="form-group">
					<label htmlFor="sender_name">Demandeur</label>
					<input type="text" className="form-control" name="sender_name" id="sender_name" placeholder="Prenom Nom" required />
					<RequiredFeedBack />
				</div>
				<div className="form-group">
					<label htmlFor="sender_email">Email</label>
					<input type="text" className="form-control" name="sender_email" id="sender_email" placeholder="email@domain.fr" required />
					<RequiredFeedBack />
				</div>
				<div className="form-group">
					<label htmlFor="sender_phone">Telephone</label>
					<input type="text" className="form-control" name="sender_phone" id="sender_phone" placeholder="00 00 00 00 00" required />
					<RequiredFeedBack />
				</div>
			</form>
		</div>
	)
}

const styles = {
	actionSection: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	submitBtn: {
		backgroundColor: '#f2f7be'
	}
}
