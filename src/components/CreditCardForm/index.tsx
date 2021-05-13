import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import cardValidator from 'card-validator';
import InputFieldController from './InputField/InputFieldController';
import PayButton from './PayButton';

interface creditCardFormProps {
	cardNumber: string;
	expiration: string;
	cvc: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
	})
);

const CreditCardFrom: React.FC = () => {
	const classes = useStyles();
	const formMethods = useForm<creditCardFormProps>({
		defaultValues: {
			cardNumber: '',
			expiration: '',
			cvc: '',
		},
	});
	const onSubmit = (model: creditCardFormProps) => {
		console.log('form submitted', model);
	};
	return (
		<>
			<Grid container spacing={2} className={classes.root}>
				<Grid item xs={12}>
					<Typography variant="h6">Welcome</Typography>
				</Grid>
				<FormProvider {...formMethods}>
					<Grid item xs={12}>
						<InputFieldController
							label="Credit Card Number"
							name="cardNumber"
							inputProps={{
								maxLength: 16,
							}}
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
							inputProps={{
								maxLength: 3,
							}}
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
							inputProps={{
								maxLength: 5,
							}}
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
					<Grid item xs={12}>
						<PayButton onClick={formMethods.handleSubmit(onSubmit)} />
					</Grid>
				</FormProvider>
			</Grid>
		</>
	);
};

export default CreditCardFrom;
