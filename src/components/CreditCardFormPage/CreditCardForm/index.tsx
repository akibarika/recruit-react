import React, { useEffect, useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import {
	Box,
	Grid,
	Hidden,
	InputAdornment,
	TextField,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import cardValidator from 'card-validator';
import InputFieldController from '../InputField/InputFieldController';
import {
	creditCardExpirationDateFormatter,
	creditCardNumberFormatter,
	expirationDateToDate,
} from '../../../services/cardFormatters';
import CardIcon from '../CardIcon';
import { getTranslations } from '../../../services/translation';
import { CreditCardFormProps } from '../../../types';
import Card from '../Card';

const CreditCardForm: React.FC<CreditCardFormProps> = (
	props: CreditCardFormProps
) => {
	const { translations: partialTranslations } = props;
	const translations = getTranslations(partialTranslations);
	const [showCvv, setShowCvv] = useState(false);
	const [isCvv, setIsCvv] = useState(false);
	const { watch, register, setValue } = useFormContext();
	const cardNumber = watch('cardNumber');
	const model = watch();
	const { card } = cardValidator.number(cardNumber);
	const handleClickShowCvv = () => {
		setShowCvv(!showCvv);
	};

	useEffect(() => {
		if (model.expiration) {
			setValue('expireDate', expirationDateToDate(model.expiration));
		}
	}, [model.expiration]);

	return (
		<>
			<Grid item xs={12}>
				<Card
					cardType={card?.type}
					model={{
						cardNumber: model.cardNumber,
						cardHolder: model.cardHolder,
						expiration: model.expiration,
						cvv: model.cvv,
					}}
					isFlipped={isCvv}
				/>
			</Grid>
			<Grid item xs={12}>
				<InputFieldController
					label={translations.cardNumber}
					name="cardNumber"
					placeholder={translations.cardNumberPlaceholder}
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
					onFocus={() => setIsCvv(false)}
				/>
			</Grid>
			<Grid item xs={12}>
				<InputFieldController
					label={translations.cardHolder}
					name="cardHolder"
					placeholder={translations.cardHolderName}
					inputProps={{
						'data-testid': 'cardHolder',
					}}
					rules={{
						required: translations.cardHolderRequired,
						validate: {
							isValid: (value: string) => {
								return (
									cardValidator.cardholderName(value).isValid ||
									translations.cardHolderInvalid
								);
							},
						},
					}}
					onFocus={() => setIsCvv(false)}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputFieldController
					label={translations.cvvCode}
					name="cvv"
					type={showCvv ? 'text' : 'password'}
					placeholder={translations.cvvCodePlaceholder}
					inputProps={{
						maxLength: 3,
						'data-testid': 'cvv',
					}}
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
					onFocus={() => setIsCvv(true)}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputFieldController
					label={translations.expiration}
					name="expiration"
					placeholder={translations.expirationPlaceholder}
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
					onFocus={() => setIsCvv(false)}
				/>
				<Box display="none">
					<input {...register('expireDate')} />
				</Box>
			</Grid>
		</>
	);
};

export default CreditCardForm;
