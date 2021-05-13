import React from 'react';
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form';
import TextInput from './index';

type Props = React.ComponentProps<typeof TextInput> & {
	name: string;
	rules: RegisterOptions;
};
const InputFieldController: React.FC<Props> = (props: Props) => {
	const { name, rules, ...restOfProps } = props;
	const {
		control,
		formState: { errors },
	} = useFormContext();
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
