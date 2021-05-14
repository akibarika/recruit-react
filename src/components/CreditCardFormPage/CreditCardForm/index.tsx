import React, { useState } from 'react';
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

const CreditCardForm: React.FC = () => {
	const [showCvv, setShowCvv] = useState(false);
	const handleClickShowCvv = () => {
		setShowCvv(!showCvv);
	};
	return (
		<>
			<Grid item xs={12}>
				<InputFieldController
					label="Credit Card Number"
					name="cardNumber"
					placeholder="1234 5678 1234 5678"
					inputProps={{
						maxLength: 19,
						'data-testid': 'cardNumber',
					}}
					validationLength={19}
					formatter={creditCardNumberFormatter}
					rules={{
						required: 'Credit Card Number is required.',
						validate: {
							isValid: (value: string) => {
								return (
									cardValidator.number(value).isValid ||
									'Credit Card Number is invalid.'
								);
							},
						},
					}}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputFieldController
					label="CVV"
					name="cvv"
					type={showCvv ? 'text' : 'password'}
					placeholder="123"
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
						required: 'Card CVV number is required.',
						validate: {
							isValid: (value: string) => {
								return (
									cardValidator.cvv(value, 3).isValid ||
									'Credit CVV number is invalid.'
								);
							},
						},
					}}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InputFieldController
					label="Expiration Date"
					name="expiration"
					placeholder="MM/YY"
					inputProps={{
						maxLength: 5,
						'data-testid': 'expiration',
					}}
					validationLength={5}
					formatter={creditCardExpirationDateFormatter}
					rules={{
						required: 'Card Expiration Date is required.',
						validate: {
							isValid: (value: string) => {
								return (
									cardValidator.expirationDate(value).isValid ||
									'Card Expiration Date is invalid.'
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
