import { Box, InputAdornment, Typography } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Control, Controller, FieldValue, FieldValues, FieldError } from 'react-hook-form';

import { phoneNumberLabelStyles } from './phone-number.styles';

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label?: string;
	name: string;
	placeholder?: string;
	startAdornment?: JSX.Element;
	endAdornment?: JSX.Element;
	disabled?: boolean;
}

export const  PhoneNumberWidget = (props: Props) => {
	const {
		control, 
		label, 
		name, 
		placeholder, 
		endAdornment,
		disabled = false
	} = props;

	const _renderHelperText = (error: FieldError | undefined) => {
		return error ? error.message : '';
	};

	return (
		<Box width="100%"> {
			label && <Typography 
				component="label" 
				htmlFor={name}
				variant="subtitle1"
				sx={phoneNumberLabelStyles}
			>
				{label}
			</Typography>
		}
		<Controller
			control={control}
			name={name}
			render={({
				field: { ref, ...field },
				fieldState: { error }
			}) => (
				<MuiPhoneNumber
					fullWidth
					placeholder={placeholder}
					error={!!error}
					helperText={_renderHelperText(error)}
					{...field}
					ref={ref}
					dropdownClass="country-dropdown"
					variant="outlined"
					sx={{
						'& .MuiInputBase-input': {paddingLeft: '0px'}
					}}
					disabled={disabled}
					defaultCountry={'us'}
					InputProps={{
						endAdornment: endAdornment && (	<InputAdornment position='end'>
							{endAdornment}
						</InputAdornment>)
					}}		
				/>
			)}
		/>
		</Box>
	);
};
