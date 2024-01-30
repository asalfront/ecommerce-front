import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { Control, Controller, FieldValue, FieldValues, FieldError } from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';

import { formatLabelStyles } from './format-field.styles';

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	format: string;
	label?: string;
	name: string;
	placeholder?: string;
	startAdornment?: JSX.Element;
	endAdornment?: JSX.Element;
	disabled?: boolean;
}

export const  FormatFieldWidget = (props: Props) => {
	const {
		control, 
		format,
		label, 
		name, 
		placeholder, 
		startAdornment, 
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
				sx={formatLabelStyles}
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
			}) => {
				if (format === 'currency')  
					return (<NumericFormat
						fullWidth
						customInput={TextField}
						disabled={disabled}
						fixedDecimalScale
						decimalScale={2}
						placeholder={placeholder}
						error={!!error}
						helperText={_renderHelperText(error)}
						{...field}
						inputRef={ref}
						InputProps={{
							startAdornment: startAdornment && (	<InputAdornment position='start'>
								{startAdornment}
							</InputAdornment>)
							,
							endAdornment: endAdornment && (	<InputAdornment position='end'>
								{endAdornment}
							</InputAdornment>)
						}}
					/>); 
				return (<PatternFormat
					fullWidth
					customInput={TextField}
					disabled={disabled}
					format={format}
					placeholder={placeholder}
					error={!!error}
					helperText={_renderHelperText(error)}
					{...field}
					inputRef={ref}
					InputProps={{
						startAdornment: startAdornment && (	<InputAdornment position='start'>
							{startAdornment}
						</InputAdornment>)
						,
						endAdornment: endAdornment && (	<InputAdornment position='end'>
							{endAdornment}
						</InputAdornment>)
					}}		
				/>);
			}}
		/>
		</Box>
	);
};
