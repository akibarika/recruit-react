import React from 'react';
import { TextField } from '@material-ui/core';

type Props = React.ComponentProps<typeof TextField> & {
	value?: string | null;
	errorText?: string | null;
};

const InputField: React.FC<Props> = (props: Props) => {
	const { errorText, value, ...restOfProps } = props;
	return (
		<TextField
			variant="outlined"
			error={errorText ? true : false}
			helperText={errorText}
			required
			fullWidth
			InputLabelProps={{ shrink: true }}
			value={value}
			{...restOfProps}
		/>
	);
};

export default InputField;
