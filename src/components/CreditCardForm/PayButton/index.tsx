import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			textAlign: `center`,
			width: `100%`,
		},
		button: {
			width: `calc(100% - 20px)`,
		},
	})
);
const PayButton: React.FC = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<Button className={classes.button} variant="contained" color="primary">
					Submit
				</Button>
			</div>
		</>
	);
};

export default PayButton;
