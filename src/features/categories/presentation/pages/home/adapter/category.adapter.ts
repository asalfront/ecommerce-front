import { SelectData } from '@/core/widgets/select';
import { Category } from '@/features/categories/domain/entities';

export const categoriesToSelectAdapter = (categories: Category[]): SelectData[] => {

	if (categories.length === 0) {
		return [{
			value: '',
			label: 'There are no priorities',
		}];
	}

	return categories.map((category) => ({
		value: category.id.toString(),
		label: category.name,
	}));
};
