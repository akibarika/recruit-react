import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import PayButton from './PayButton';
import CreditCardForm from './CreditCardForm';
import { ICreditCardFormProps } from '../../types';
import { CreditCardFormPageProps } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
	})
);

const CreditCardFormPage: React.FC<CreditCardFormPageProps> = (
	props: CreditCardFormPageProps
) => {
	const { onSubmitCallback } = props;
	const classes = useStyles();
	const formMethods = useForm<ICreditCardFormProps>({
		reValidateMode: 'onChange',
		defaultValues: {
			cardNumber: '',
			expiration: '',
			cvv: '',
		},
	});

	const onSubmit = async (model: ICreditCardFormProps) => {
		await onSubmitCallback(model);
	};
	return (
		<>
			<Grid container spacing={2} className={classes.root}>
				<Grid item xs={12}>
					<Typography variant="h6">Welcome</Typography>
				</Grid>
				<FormProvider {...formMethods}>
					<CreditCardForm />
					<Grid item xs={12}>
						<PayButton
							onClick={formMethods.handleSubmit(onSubmit)}
							data-testid="submit-button"
						/>
					</Grid>
				</FormProvider>
			</Grid>
		</>
	);
};

export default CreditCardFormPage;
