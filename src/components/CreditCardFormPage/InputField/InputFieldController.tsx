import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextInput from './index';
import { InputFieldControllerProps } from '../../../types';

const InputFieldController: React.FC<InputFieldControllerProps> = (
	props: InputFieldControllerProps
) => {
	const {
			name,
			rules,
			validationLength = 0,
			formatter,
			...restOfProps
		} = props,
		{
			control,
			formState: { errors },
			trigger,
			watch,
		} = useFormContext(),
		value = watch(name);

	useEffect(() => {
		if (value && value.length === validationLength) {
			trigger(name);
		}
	}, [value, name, validationLength, trigger]);

	return (
		<Controller
			control={control}
			render={({ field: { onChange, value } }) => (
				<TextInput
					{...restOfProps}
					errorText={errors[name]?.message}
					onChange={(input) => {
						const newValue = formatter
							? formatter(value, input.target.value)
							: input.target.value;
						onChange(newValue);
					}}
					value={value}
				/>
			)}
			name={name}
			rules={rules}
		/>
	);
};

export default InputFieldController;
