import React from 'react';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = React.ComponentProps<typeof TextField> & {
	errorText?: string | null;
};
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {
			padding: 10,
		},
	})
);
const InputField: React.FC<Props> = (props: Props) => {
	const { errorText, ...restOfProps } = props;
	const classes = useStyles();
	return (
		<TextField
			variant="outlined"
			error={errorText ? true : false}
			helperText={errorText}
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

export default InputField;
