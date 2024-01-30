import '@mui/material/styles/createPalette';
declare module '@mui/material/styles/createPalette' {
	interface Palette {
    tertiary: Palette['primary'];
	}
  interface PaletteOptions {
    tertiary: PaletteColor['primary'];
  }
	interface PaletteColor {
		focused?: string;
    hovered?: string;
    pressed?: string;
	}
  interface SimplePaletteColorOptions {
    focused?: string;
    hovered?: string;
    pressed?: string;
  }
}

type ButtonPropsType = {
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'tertiary'
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
};

import { ButtonProps } from '@mui/material';

type ButtonPropsType = {
  color?: ButtonProps['color'];
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
};

export default ButtonPropsType;


declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    tertiary;
  }
}
