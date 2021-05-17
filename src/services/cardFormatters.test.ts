import {
	creditCardExpirationDateFormatter,
	creditCardNumberFormatter,
	expirationDateToDate,
} from './cardFormatters';

describe('cardFormatters should', () => {
	test.each`
		oldValue    | value                         | expected
		${`4`}      | ${`4444111111111111`}         | ${`4444 1111 1111 1111`}
		${`4`}      | ${'411111111111'}             | ${`4111 1111 1111 `}
		${`444`}    | ${`4444`}                     | ${`4444 `}
		${``}       | ${`4111 `}                    | ${`4111 `}
		${``}       | ${'4'}                        | ${`4`}
		${`4444 4`} | ${'444411111111111122222222'} | ${`4444 1111 1111 1111`}
	`(
		'return formatted number $expected when execute $value in it',
		({ oldValue, value, expected }) => {
			expect(creditCardNumberFormatter(oldValue, value)).toEqual(expected);
		}
	);

	test.each`
		oldValue | value      | expected
		${``}    | ${`1122`}  | ${`11/22`}
		${`1`}   | ${'11/22'} | ${`11/22`}
		${`11`}  | ${`11`}    | ${`11/`}
		${`11/`} | ${`11/ `}  | ${`11/`}
		${`11`}  | ${'11/1'}  | ${`11/1`}
	`(
		'return formatted date $expected when execute $value in it',
		({ oldValue, value, expected }) => {
			expect(creditCardExpirationDateFormatter(oldValue, value)).toEqual(
				expected
			);
		}
	);

	test.each`
		value      | expected
		${`11/22`} | ${`2022-11`}
		${`01/25`} | ${`2025-01`}
		${`12/12`} | ${`2012-12`}
	`(
		'return date formatted $expected when execute $value in it',
		({ value, expected }) => {
			expect(expirationDateToDate(value)).toEqual(new Date(expected));
		}
	);
});
