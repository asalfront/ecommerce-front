import { Autocomplete, Box, TextField, Typography, MenuItem } from '@mui/material';
import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';

import { autoCompletetLabelStyles, paperStyles, autoCompleteStyles, optionStyles } from './auto-complete-field.styles';

interface AutoCompleteOptions {
	value: string;
	label: string;
}

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label?: string;
	name: string;
	options: AutoCompleteOptions[];
	type?: string;
	width?: string;
}

export const AutocompleteFieldWidget = (props: Props) => {
	const { name, options, label, control, width } = props;

	const _renderHelperText = (error: FieldError | undefined ) => {
		return error?.message ? error?.message : '';
	};

	return (
		<Box minWidth="250px" width={width}> {
			label && <Typography 
				component="label" 
				htmlFor={name}
				variant="subtitle1"
				sx={autoCompletetLabelStyles}
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
				<Autocomplete
					{...field}
					options={options.map((option) => option.value.toString())}
					sx={autoCompleteStyles}
					getOptionLabel={(option) => options.find((item) => item.value.toString() === option)?.label || ''}
					isOptionEqualToValue={(option, value) =>  option === value}
					componentsProps={{
						paper:{
							sx: paperStyles
						},
					}}
					renderOption={(props, option) => {
						return(
							<MenuItem {...props} sx={optionStyles}>
								{options.find((item) => item.value.toString() === option)?.label || ''}
							</MenuItem>
						);
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							fullWidth
							error={!!error}
							placeholder='Select a customer'
							helperText={_renderHelperText(error)}
							inputRef={ref}
						/>
					)}
					onChange={(_, value) => {
						field.onChange(value);
					}}
				/>
			)}
		/>
		</Box>
	);
};
