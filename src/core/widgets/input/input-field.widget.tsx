import { FC } from 'react';
import { Box, InputAdornment, TextField, Theme, Typography } from '@mui/material';
import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';

import { inputLabelStyles, startAdornmentStyles } from './input-field.styles';

interface Props {
	startAdornment?: JSX.Element;
	endAdornment?: JSX.Element;
	control: Control<FieldValue<FieldValues>, unknown>;
	label?: string;
	name: string;
	placeholder?: string;
	type?: string;
	labelColor?: 'common' | 'primary'
	disabled?: boolean;
	minLines?: number;
}

export const InputFieldWidget:FC<Props> = (props) => {
	const { 
		name, 
		label, 
		control, 
		type = 'text', 
		startAdornment,
		endAdornment, 
		placeholder, 
		labelColor, 
		disabled = false,
		minLines = 1
	} = props;

	const _renderHelperText = (error: FieldError | undefined) => {
		return error?.message ? error?.message : '';
	};

	return (
		<Box width="100%"> {
			label && <Typography 
				component="label" 
				htmlFor={name}
				variant="subtitle1"
				sx={inputLabelStyles}
				color={(theme: Theme) => labelColor === 'primary' ? theme.palette.primary.main : theme.palette.common.black}
			>
				{label}
			</Typography>
		}
		<Controller
			name={name}
			control={control}
			render={({
				field: { ref, ...field },
				fieldState: { error }
			}) => (
				<TextField
					{...field}
					type={type}
					placeholder={placeholder}
					fullWidth
					disabled={disabled}
					multiline={minLines > 1}
					minRows={minLines}
					InputProps={{
						startAdornment: startAdornment && (	<InputAdornment position='start' sx={startAdornmentStyles}>
							{startAdornment}
						</InputAdornment>)
						,
						endAdornment: endAdornment && (	<InputAdornment position='end'>
							{endAdornment}
						</InputAdornment>)
					}}	
					error={!!error}
					inputRef={ref}
					value={field.value ?? ''}
					helperText={_renderHelperText(error)}
				/>
			)}
		/>
		</Box>
	);
};
