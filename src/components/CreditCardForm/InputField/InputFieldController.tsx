import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextInput from './index';

type Props = React.ComponentProps<typeof TextInput> & {
	name: string;
};
const InputFieldController: React.FC<Props> = (props: Props) => {
	const { name, ...restOfProps } = props;
	const { control } = useFormContext();
	return (
		<Controller
			control={control}
			render={({ field: { onChange, value } }) => (
				<TextInput
					{...restOfProps}
					onChange={(value) => onChange(value)}
					value={value}
				/>
			)}
			name={name}
		/>
	);
};

export default InputFieldController;
