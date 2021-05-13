import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
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
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputFieldController label="CVC" name="cvc" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputFieldController label="Expiration Date" name="expiration" />
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
