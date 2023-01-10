export const formatDateTime = date => {
	return new Intl.DateTimeFormat("fr", { dateStyle: 'short', timeStyle: 'short' }).format(date);
}

export const formatDate = date => {
	return new Intl.DateTimeFormat("fr", { day: '2-digit', month: 'short' }).format(date);
}
