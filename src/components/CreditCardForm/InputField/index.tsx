import React from 'react';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = React.ComponentProps<typeof TextField> & {
	value?: string | null;
	errorText?: string | null;
};
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {},
	})
);
const InputField: React.FC<Props> = (props: Props) => {
	const { errorText, value, ...restOfProps } = props;
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
			value={value}
			{...restOfProps}
		/>
	);
};

export default InputField;
