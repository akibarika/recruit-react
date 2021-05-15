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
		cardNumberPlaceholder: '**** **** **** ****',
		expirationRequired: 'Card Expiration Date is required.',
		expirationInvalid: 'Card Expiration Date is invalid.',
		expirationPlaceholder: 'MM/YY',
		cvvCodeRequired: 'Card CVV number is required.',
		cvvCodeInvalid: 'Card CVV number is invalid.',
		cvvCodePlaceholder: '123',
		cardHolder: 'Card Holder',
		cardHolderName: 'Sawyer Lu',
		expirationOnCard: 'Expires',
		cvvCodePlaceholderOnCard: '***',
		...translations,
	};
}
