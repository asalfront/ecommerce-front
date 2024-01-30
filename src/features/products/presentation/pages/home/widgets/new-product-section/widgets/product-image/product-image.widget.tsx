import { Box, Card, CardActions, CardMedia, DialogTitle, Grid, IconButton, ImageList, ImageListItem, useMediaQuery } from '@mui/material';

import { ButtonWidget } from '@/core/widgets';
import { useProductContext, useUploadProductPhoto, useDeletePhoto } from '@/features/products/presentation/pages/home/hooks';
import { defaultImageStyles } from './product-image.styles';
import { dialogTitleStyles } from '@/core/widgets/modal/modal-ui.styles';
import { Delete } from '@mui/icons-material';

export const ProductImageWidget = () => {

	const matches = useMediaQuery('(min-width:900px)');
	const { onStepChange, product, onCloseProductModal } = useProductContext();
	const { uploadPhoto } = useUploadProductPhoto();
	const { onDeletePhoto } = useDeletePhoto();


	const onUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			uploadPhoto(file);
		}
	};

	if (!product) return null;

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
					Product Images
				</DialogTitle>
				<Grid container spacing={4}>
					<Grid item xs={12} md={12}>
						<input
							id='icon-button-file'
							accept='image/*'
							type='file'
							hidden
							onChange={onUploadPhoto}
						/>
						<label htmlFor='icon-button-file'>
							<Box sx={defaultImageStyles}>
									Upload Image
							</Box>
						</label>
					</Grid>
					<Grid item xs={12} md={12}>
						<ImageList cols={matches ? 4 : 2} rowHeight={180}>
							{product.images.map((image) => (
								<ImageListItem key={image.id}>
									<Card sx={{ width: 160, height: 172, position: 'relative', display: 'flex', alignItems: 'center'}}>
										<CardActions sx={{ position: 'absolute', top: 0, right: 0 }}>
											<IconButton 
												aria-label='delete' 
												size='small' 
												color='primary'
												onClick={() => onDeletePhoto(image.id)}
											>
												<Delete />
											</IconButton>
										</CardActions>
										<CardMedia
											component='img'
											height='100'
											image={image.image}
											alt={image.product_name}
										/>
									</Card>
								</ImageListItem>
							))}
						</ImageList>
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
							label='Back'
							type='secondary'
							onClick={() => onStepChange(0)}
						/>

					</Grid>
					<Grid item xs={5} md={4}>
						<ButtonWidget
							label='Save'
							type='primary'
							onClick={onCloseProductModal}
						/>
					</Grid>
				</Grid>
			</form>
		</>
	);
};
