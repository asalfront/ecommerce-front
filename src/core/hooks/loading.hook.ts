import { useEffect } from 'react';
import { useUI } from './ui.hook';

export const useLoading = (fetchers: boolean[]) => {
	const { blockUI } = useUI();

	const closeLoading = () => blockUI.current?.close();

	useEffect(() => {
		if (fetchers.some((fetcher) => fetcher)) {
			blockUI.current?.open();
			return;
		}
		blockUI.current?.close();

		return () =>	blockUI.current?.close();
	
	}, [...fetchers]);


	return {
		closeLoading,
	};
};
