import { ButtonWidget, FormatFieldWidget, InputFieldWidget, SelectFieldWidget, SwitchFieldWidget } from '@/core/widgets';
import { DialogTitle, Grid } from '@mui/material';
import { useProductContext, useCreateProductDetail } from '@/features/products/presentation/pages/home/hooks';
import { addProductDetailModel } from '@/features/products/presentation/pages/home/validations';
import { dialogTitleStyles } from '../product/product.styles';

export const ProductDetailWidget = () => {

	const { onCloseProductModal } = useProductContext();
	const { control, categories, onCreateProductDetail } = useCreateProductDetail();

	const { formField } = addProductDetailModel;

	return (
		<>
			<form>
				<DialogTitle 
					fontSize={{
						xs: '1.625rem',
						lg: '1.75rem',
						md: '1.875rem',
					}}
					fontWeight="600"
					sx={dialogTitleStyles}
				>
					Product Detail
				</DialogTitle>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.name.label}
							placeholder={formField.name.placeholder}
							name={formField.name.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.code.label}
							placeholder={formField.code.placeholder}
							name={formField.code.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={6} md={2}>
						<SwitchFieldWidget
							label={formField.top.label}
							name={formField.top.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={6} md={2}>
						<SwitchFieldWidget
							label={formField.featured.label}
							name={formField.featured.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<SelectFieldWidget
							label={formField.categories.label}
							placeholder={formField.categories.placeholder}
							name={formField.categories.name}
							control={control}
							options={categories}
							multiple
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<FormatFieldWidget
							label={formField.price.label}
							placeholder={formField.price.placeholder}
							name={formField.price.name}
							control={control}
							format='currency'
						/>
					</Grid>
					<Grid item xs={12} md={12}>
						<InputFieldWidget
							label={formField.description.label}
							placeholder={formField.description.placeholder}
							name={formField.description.name}
							control={control}
							minLines={3}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
					</Grid>
				</Grid>
				<Grid 
					container
					item 
					xs={12}
					marginTop={10}
					justifyContent='space-between'
				>
					<Grid item xs={5} md={4}>
						<ButtonWidget
							label='Cancel'
							type='secondary'
							onClick={onCloseProductModal}
						/>

					</Grid>
					<Grid item xs={5} md={4}>
						<ButtonWidget
							label='Next'
							type='primary'
							onClick={onCreateProductDetail}
						/>
					</Grid>
				</Grid>
			</form>
		</>
	);
};

