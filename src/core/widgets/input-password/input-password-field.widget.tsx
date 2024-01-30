import { FC, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField, Theme, Typography } from '@mui/material';
import { Control, Controller, FieldError, FieldValue, FieldValues } from 'react-hook-form';

import { inputLabelStyles } from './input-password-field.styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface Props {
	control: Control<FieldValue<FieldValues>, unknown>;
	label?: string;
	name: string;
	placeholder?: string;
	autoComplete?: string;
	labelColor?: 'primary' | 'common';
}

export const InputPasswordFieldWidget: FC<Props> = (props) => {
	const { name, label, control, placeholder, labelColor = 'common', autoComplete = 'on' } = props;
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const _renderHelperText = (error: FieldError | undefined) => {
		return error?.message ? error?.message : '';
	};

	const _handleShowPassword = () => {
		setShowPassword(!showPassword);
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
					type={showPassword ? 'text' : 'password'}
					placeholder={placeholder}
					autoComplete={autoComplete}
					fullWidth
					InputProps={{
						endAdornment:
								<InputAdornment position="end">
									<IconButton
										onClick={_handleShowPassword} sx={{ padding: 0 }}
									>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
						,
					}}
					error={!!error}
					inputRef={ref}
					helperText={_renderHelperText(error)}
					value={field.value || ''}
				/>
			)}
		/>
		</Box>
	);
};
