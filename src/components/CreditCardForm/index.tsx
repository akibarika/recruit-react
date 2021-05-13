import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import TextInput from './TextInput';
import PayButton from './PayButton';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
	})
);

const CreditCardFrom: React.FC = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container spacing={2} className={classes.root}>
				<Grid item xs={12}>
					<Typography variant="h6">Welcome</Typography>
				</Grid>

				<Grid item xs={12}>
					<TextInput label="Credit Card Number" name="ccnumber" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextInput label="CVC" name="cvc" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextInput label="Expiration Date" name="ccexp" />
				</Grid>
				<Grid item xs={12}>
					<PayButton />
				</Grid>
			</Grid>
		</>
	);
};

export default CreditCardFrom;
