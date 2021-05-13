import React, { useEffect } from 'react';
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form';
import TextInput from './index';

type Props = React.ComponentProps<typeof TextInput> & {
	name: string;
	rules: RegisterOptions;
	validationLength?: number;
};
const InputFieldController: React.FC<Props> = (props: Props) => {
	const { name, rules, validationLength = 0, ...restOfProps } = props,
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
					onChange={(value) => onChange(value)}
					value={value}
				/>
			)}
			name={name}
			rules={rules}
		/>
	);
};

export default InputFieldController;
