import { AppResponse } from '../domain/entities/response/app.response';
import { Data } from '../domain/entities/response/data';
import { useUI } from './ui.hook';

export const useSnackbar = () => {
	const { snackBarUI } = useUI();

	const showError = <T>(r: AppResponse<T>) => {
		const data = r.data as unknown as Data;
		const message = data.message;
		snackBarUI.current?.open({
			message: message ?? 'An error occurred',
			type: 'error'
		});
		return;
	};

	return {
		showError
	};
};
