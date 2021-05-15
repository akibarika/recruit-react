import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Grid, InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import cardValidator from 'card-validator';
import InputFieldController from '../InputField/InputFieldController';
import {
	creditCardExpirationDateFormatter,
	creditCardNumberFormatter,
} from '../../../services/cardFormatters';
import CardIcon from '../CardIcon';
import { getTranslations } from '../../../services/translation';
import { CreditCardFormProps } from '../../../types';

const CreditCardForm: React.FC<CreditCardFormProps> = (
	props: CreditCardFormProps
) => {
	const { translations: partialTranslations } = props;
	const translations = getTranslations(partialTranslations);
	const [showCvv, setShowCvv] = useState(false);
	const { watch } = useFormContext();
	const cardNumber = watch('cardNumber');
	const handleClickShowCvv = () => {
		setShowCvv(!showCvv);
	};
	return (
		<>
			<Grid item xs={12}>
				<InputFieldController
					label={translations.cardNumber}
					name="cardNumber"
					placeholder={translations.cardNumberPlaceHolder}
					inputProps={{
						maxLength: 19,
						'data-testid': 'cardNumber',
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<CardIcon cardNumber={cardNumber} />
							</InputAdornment>
						),
					}}
					validationLength={19}
					formatter={creditCardNumberFormatter}
					rules={{
						required: translations.cardNumberRequired,
						validate: {
							isValid: (value: string) => {
								return (
									cardValidator.number(value).isValid ||
									translations.cardNumberInvalid
								);
							},
						},
					}}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputFieldController
					label={translations.cvvCode}
					name="cvv"
					type={showCvv ? 'text' : 'password'}
					placeholder={translations.cvvCodePlaceHolder}
					inputProps={{
						maxLength: 3,
						'data-testid': 'cvv',
					}}
					value=""
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowCvv}
								>
									{showCvv ? <VisibilityIcon /> : <VisibilityOffIcon />}
								</IconButton>
							</InputAdornment>
						),
					}}
					validationLength={3}
					rules={{
						required: translations.cvvCodeRequired,
						validate: {
							isValid: (value: string) => {
								return (
									cardValidator.cvv(value, 3).isValid ||
									translations.cvvCodeInvalid
								);
							},
						},
					}}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputFieldController
					label={translations.expiration}
					name="expiration"
					placeholder={translations.expirationPlaceHolder}
					inputProps={{
						maxLength: 5,
						'data-testid': 'expiration',
					}}
					validationLength={5}
					formatter={creditCardExpirationDateFormatter}
					rules={{
						required: translations.expirationRequired,
						validate: {
							isValid: (value: string) => {
								return (
									cardValidator.expirationDate(value).isValid ||
									translations.expirationInvalid
								);
							},
						},
					}}
				/>
			</Grid>
		</>
	);
};

export default CreditCardForm;
