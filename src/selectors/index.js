export const getInterventions = state => state.interventions;

export const getInterventionsSorted = direction => state => {
	const interventions = getInterventions(state);

	return interventions.sort((a, b) => {
		switch (direction) {
			case 'asc':
				return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
			case 'desc':
				return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
			default:
				return 0;
		}
	})
}

export const getIntervention = id => state => {
	const interventions = getInterventions(state);

	console.log(id, interventions)
	
	return interventions.find(intervention => intervention.id === parseInt(id))
}
