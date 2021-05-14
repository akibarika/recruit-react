import {
	creditCardExpirationDateFormatter,
	creditCardNumberFormatter,
} from './cardFormatters';

describe('cardFormatters should', () => {
	test.each`
		value                         | expected
		${`4444111111111111`}         | ${`4444 1111 1111 1111`}
		${'411111111111'}             | ${`4111 1111 1111 `}
		${`4444`}                     | ${`4444 `}
		${`4111 `}                    | ${`4111 `}
		${'4'}                        | ${`4`}
		${'444411111111111122222222'} | ${`4444 1111 1111 1111`}
	`(
		'return formatted number $expected when execute $value in it',
		({ value, expected }) => {
			expect(creditCardNumberFormatter(value)).toEqual(expected);
		}
	);

	test.each`
		value      | expected
		${`1122`}  | ${`11/22`}
		${'11/22'} | ${`11/22`}
		${`11`}    | ${`11/`}
		${`11/ `}  | ${`11/`}
		${'11/1'}  | ${`11/1`}
	`(
		'return formatted date $expected when execute $value in it',
		({ value, expected }) => {
			expect(creditCardExpirationDateFormatter(value)).toEqual(expected);
		}
	);
});
