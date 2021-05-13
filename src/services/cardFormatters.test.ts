import {
	creditCardExpirationDateFormatter,
	creditCardNumberFormatter,
} from './cardFormatters';

describe('Execute Number Formatter function', () => {
	test.each([
		{
			value: '4444111111111111',
			expected: '4444 1111 1111 1111',
		},
		{
			value: '411111111111',
			expected: '4111 1111 1111 ',
		},
		{
			value: '4444',
			expected: '4444 ',
		},
		{
			value: '4111 ',
			expected: '4111 ',
		},
		{
			value: '4',
			expected: '4',
		},
		{
			value: '444411111111111122222222',
			expected: '4444 1111 1111 1111',
		},
	])('%s', ({ value, expected }) => {
		expect(creditCardNumberFormatter(value)).toEqual(expected);
	});
});

describe('Execute Number Formatter function', () => {
	test.each([
		{
			value: '1122',
			expected: '11/22',
		},
		{
			value: '11/22',
			expected: '11/22',
		},
		{
			value: '11',
			expected: '11/',
		},
		{
			value: '11/',
			expected: '11/',
		},
	])('%s', ({ value, expected }) => {
		expect(creditCardExpirationDateFormatter(value)).toEqual(expected);
	});
});
