import React from 'react';
import { TextField } from '@material-ui/core';
import { InputFieldProps } from '../../../types';

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
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
