export const creditCardNumberFormatter = (value: string) => {
	return value
		.replace(/\W/gi, '')
		.replace(/(.{4})/g, '$1 ')
		.substring(0, 19);
};

export const creditCardExpirationDateFormatter = (value: string) => {
	return value
		.replace(/\W/gi, '')
		.replace(/(.{2})/g, '$1/')
		.substring(0, 5);
};
