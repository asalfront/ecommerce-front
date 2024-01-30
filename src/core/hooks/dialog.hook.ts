import { useUI } from './ui.hook';

interface Dialog {
	title: string;
	content: string;
	cancelText: string;
}

interface ConfirmDialog {
	title: string;
	content: string;
	cancelText: string;
	confirmText: string;
	onConfirm: () => void;
}

export const useDialog = () => {
	const { dialogUI } = useUI();

	const showSuccessDialog = ({
		title,
		content,
		cancelText,
	}:Dialog) => {
		dialogUI.current?.open({
			title: title,
			content: content,
			type: 'success',
			cancelText: cancelText,
		});
	};

	const showErrorDialog = ({
		title,
		content,
		cancelText,
	}:Dialog) => {
		dialogUI.current?.open({
			title: title,
			content: content,
			type: 'error',
			cancelText: cancelText,
		});
	};

	const showConfirmDialog = ({
		title,
		content,
		cancelText,
		confirmText,
		onConfirm,
	}:ConfirmDialog) => {
		dialogUI.current?.open({
			title: title,
			content: content,
			type: 'wait',
			cancelText: cancelText,
			confirmText: confirmText,
			onConfirm: () => {
				onConfirm();
				dialogUI.current?.close();
			}
		});
	};

	return {
		showSuccessDialog,
		showErrorDialog,
		showConfirmDialog,
	};
};
