import React from 'react';
import { TextField, Grid, Typography } from '@material-ui/core';

const CreditCardFrom = () => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h6">Welcome</Typography>
				</Grid>

				<Grid item xs={12}>
					<TextField
						label="Credit Card Number"
						name="ccnumber"
						variant="outlined"
						required
						fullWidth
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label="CVC"
						name="cvc"
						variant="outlined"
						required
						fullWidth
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						label="Expiration Date"
						name="ccexp"
						variant="outlined"
						required
						fullWidth
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default CreditCardFrom;
