import { FC } from 'react';
import { Box, Chip, FormControl, FormHelperText, MenuItem, Select, Typography } from '@mui/material';
import { Cancel } from '@mui/icons-material';
import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';

import { selectLabelStyles, selectRestItemStyles, selectPaperStyles, selectlastItemStyles, defaultItemStyles, placeholderItemStyles, chipStyles, inputStyles, selectContainer, placeholderStyles } from './select-field.styles';

export interface SelectData {
	value: string;
	label: string;
}

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label?: string;
	name: string;
	multiple?: boolean;
	options: SelectData[];
	type?: string;
	width?: string;
	placeholder?: string;
}

export const SelectFieldWidget:FC<Props> = (props) => {
	const { name, label, control, multiple, width, placeholder } = props;

	const _renderHelperText = (error: FieldError | undefined ) => {
		return error?.message? error?.message : '';
	};

	const lastOption = props.options[props.options.length - 1];
	const restOptions = props.options.slice(0, props.options.length - 1);

	return (
		<Box minWidth="250px" width={width}>
			{label && <Typography 
				component="label" 
				htmlFor={name}
				variant="subtitle1"
				sx={selectLabelStyles}
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
					<FormControl fullWidth error={!!error}>
						<Select
							multiple={multiple}
							displayEmpty
							MenuProps={{
								PaperProps: {
									sx: selectPaperStyles
								}
							}}
							{...field}
							fullWidth
							error={!!error}
							inputRef={ref}
							value={multiple ? ((field.value as string[]).length > 0 ? field.value : []) : (field.value ?? 'none')}
							renderValue={(selected) =>  {
								
								if (multiple && selected.length === 0 || selected === 'none') {
									return (
										<Typography sx={placeholderStyles}>
											{placeholder ?? 'Select'}
										</Typography>
									);
								}

								return(
									<Box sx={selectContainer}>
										{
											multiple ? 
												(selected.map((value: string) => (
													<Chip 
														key={value} 
														label={props.options.find((option) => option.value == value)?.label}
														sx={chipStyles}
														deleteIcon={<Cancel onMouseDown={(event) => event.stopPropagation()}/>} 	
														onDelete={() => {
															const newValue = (field.value as string[]).filter((v) => v !== value);
															field.onChange(newValue);
														}}
													/>
												)))
												:
												(<Typography sx={inputStyles}>
													{props.options.find((option) => option.value == selected)?.label}
												</Typography>)
										}
									</Box>
								);
							}
							}
						>
							<MenuItem sx={defaultItemStyles} value='none' >
								<Typography sx={placeholderItemStyles}>{placeholder ?? 'Select'}</Typography>
							</MenuItem>
							{restOptions.map((option) => (
								<MenuItem 
									key={option.value} 
									value={option.value} 
									sx={selectRestItemStyles} 
									disabled={multiple && field.value?.includes('0') && option.value !== '0'}
								>
									{option.label}
								</MenuItem>
							))}
							<MenuItem 
								sx={selectlastItemStyles}
								value={lastOption.value}
								disabled={multiple && field.value?.includes('0') && lastOption.value !== '0'}
							>
								{lastOption.label}
							</MenuItem>
						</Select>
						<FormHelperText>
							{_renderHelperText(error)}
						</FormHelperText>
					</FormControl>
				)}
			/>
		</Box>
	);
};
