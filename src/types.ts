import React from 'react';
import { Button, TextField } from '@material-ui/core';
import TextInput from './components/CreditCardFormPage/InputField';
import { RegisterOptions } from 'react-hook-form';

export interface ICreditCardFormProps {
	cardNumber: string;
	cardHolder: string;
	expiration: string;
	cvv: string;
	expireDate?: Date;
}

export type InputFieldProps = React.ComponentProps<typeof TextField> & {
	value?: string | null;
	errorText?: string | null;
};

export type InputFieldControllerProps = React.ComponentProps<
	typeof TextInput
> & {
	name: string;
	rules: RegisterOptions;
	validationLength?: number;
	formatter?: (oldValue: string, value: string) => string;
};

export type PayButtonProps = React.ComponentProps<typeof Button>;

export type CreditCardFormPageProps = {
	onSubmitCallback: (model: ICreditCardFormProps) => Promise<void>;
};

export type PlaceholderTextProps = {
	value: string;
	placeholder: string;
};

export type CardIconProps = {
	cardNumber: string;
};

export type CreditCardFormProps = {
	translations?: PartialTranslations;
};

export type CardProps = CreditCardFormProps & {
	cardType?: string;
	model: ICreditCardFormProps;
	isFlipped: boolean;
};

export type TranslationsContext = {
	cardNumber: string;
	expiration: string;
	cvvCode: string;
	submit: string;
	cardNumberRequired: string;
	cardNumberInvalid: string;
	cardNumberPlaceholder: string;
	cardHolderRequired: string;
	cardHolderInvalid: string;
	cardHolderPlaceholder: string;
	expirationRequired: string;
	expirationInvalid: string;
	expirationPlaceholder: string;
	cvvCodeRequired: string;
	cvvCodeInvalid: string;
	cvvCodePlaceholder: string;
	cardHolder: string;
	cardHolderName: string;
	expirationOnCard: string;
	cvvCodePlaceholderOnCard: string;
};

type Partial<T> = {
	[P in keyof T]?: T[P];
};

export type PartialTranslations = Partial<TranslationsContext>;
