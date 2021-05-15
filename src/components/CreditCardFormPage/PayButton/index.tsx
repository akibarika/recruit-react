import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { PayButtonProps } from '../../../types';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			width: `100%`,
		},
	})
);
const PayButton: React.FC<PayButtonProps> = (props) => {
	const classes = useStyles();
	const { ...restOfProps } = props;

	return (
		<>
			<Button
				type="submit"
				className={classes.button}
				variant="contained"
				color="primary"
				{...restOfProps}
			>
				Submit
			</Button>
		</>
	);
};

export default PayButton;
