import React from 'react';
import { Button, TextField } from '@material-ui/core';
import TextInput from './components/CreditCardFormPage/InputField';
import { RegisterOptions } from 'react-hook-form';

export interface ICreditCardFormProps {
	cardNumber: string;
	expiration: string;
	cvv: string;
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
	formatter?: (value: string) => string;
};

export type PayButtonProps = React.ComponentProps<typeof Button>;

export type CreditCardFormPageProps = {
	onSubmitCallback: (model: ICreditCardFormProps) => Promise<void>;
};

export type CreditCardFormProps = {
	translations?: PartialTranslations;
};

export type TranslationsContext = {
	cardNumber: string;
	expiration: string;
	cvvCode: string;
	submit: string;
	cardNumberRequired: string;
	cardNumberInvalid: string;
	cardNumberPlaceHolder: string;
	expirationRequired: string;
	expirationInvalid: string;
	expirationPlaceHolder: string;
	cvvCodeRequired: string;
	cvvCodeInvalid: string;
	cvvCodePlaceHolder: string;
};

type Partial<T> = {
	[P in keyof T]?: T[P];
};

export type PartialTranslations = Partial<TranslationsContext>;
