import { PartialTranslations, TranslationsContext } from '../types';

export function getTranslations(
	translations: PartialTranslations = {}
): TranslationsContext {
	return {
		cardNumber: 'Credit Card Number',
		expiration: 'Expiration Date',
		cvvCode: 'CVV',
		submit: 'Submit',
		cardNumberRequired: 'Credit Card Number is required.',
		cardNumberInvalid: 'Credit Card Number is invalid.',
		cardNumberPlaceHolder: '1234 5678 1234 5678',
		expirationRequired: 'Card Expiration Date is required.',
		expirationInvalid: 'Card Expiration Date is invalid.',
		expirationPlaceHolder: 'MM/YY',
		cvvCodeRequired: 'Card CVV number is required.',
		cvvCodeInvalid: 'Card CVV number is invalid.',
		cvvCodePlaceHolder: '123',
		...translations,
	};
}
