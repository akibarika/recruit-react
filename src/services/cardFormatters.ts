export const creditCardNumberFormatter = (oldValue: string, value: string) => {
	if (oldValue.length > value.length) return value;
	return value
		.replace(/\W/gi, '')
		.replace(/(.{4})/g, '$1 ')
		.substring(0, 19);
};

export const creditCardExpirationDateFormatter = (
	oldValue: string,
	value: string
) => {
	if (oldValue.length > value.length) return value;
	return value
		.replace(/\W/gi, '')
		.replace(/(.{2})/g, '$1/')
		.substring(0, 5);
};
