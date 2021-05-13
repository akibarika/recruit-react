import React from 'react';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = React.ComponentProps<typeof TextField>;
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {
			padding: 12,
			borderColor: '#B9C4CA',
			borderWidth: 1,
			borderRadius: 4,
			fontSize: 16,
		},
	})
);
const TextInput: React.FC<Props> = (props) => {
	const { ...restOfProps } = props;
	const classes = useStyles();
	return (
		<TextField
			variant="outlined"
			required
			fullWidth
			InputLabelProps={{ shrink: true }}
			InputProps={{
				className: classes.input,
			}}
			{...restOfProps}
		/>
	);
};

export default TextInput;
