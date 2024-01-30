import { FC } from 'react';
import { Typography } from '@mui/material';
import { Control, Controller, FieldValue, FieldValues } from 'react-hook-form';

import { StyledSwitch } from './switch-field.styles';

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label?: string;
	name: string;
}

export const SwitchFieldWidget:FC<Props> = (props) => {
	const { name, label, control } = props;

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { ref, ...field },
			}) => (
				<>
					<StyledSwitch 
						{...field} 
						ref={ref}
						checked={field.value}
						onChange={field.onChange}
					/>
					<Typography component="label" htmlFor={name} variant="subtitle1" fontWeight="400">
						{label}
					</Typography>
				</>				
			)}
		/>
	);
};
