import { Step, StepButton, Stepper } from '@mui/material';
import { useProductContext } from '@/features/products/presentation/pages/home/hooks';

const productSteps = ['Product Detail', 'Images'];

export const StepHeaderWidget = () => {

	const { step } = useProductContext();

	return (
		<Stepper alternativeLabel activeStep={step} sx={{ marginBottom: '36px' }}>
			{productSteps.map((label) => (
				<Step key={label}>
					<StepButton color="inherit">
						{label}
					</StepButton>
				</Step>
			))}
		</Stepper>
	);
};
