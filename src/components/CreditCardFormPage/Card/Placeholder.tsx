import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type PlaceholderTextProps = {
	value: string;
	placeholder: string;
};
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		placeholder: {
			color: 'gray',
		},
	})
);
const PlaceholderText: React.FC<PlaceholderTextProps> = (
	props: PlaceholderTextProps
) => {
	const { value, placeholder } = props;
	const rest = placeholder.substring(value.length);
	const classes = useStyles();
	return (
		<>
			{value}
			<span className={classes.placeholder}>{rest}</span>
		</>
	);
};

export default PlaceholderText;
