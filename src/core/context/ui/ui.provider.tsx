import { createRef, FC, useMemo } from 'react';

import { UIContext } from './ui.context';
import { BLockUIWidget, SnackBarUIWidget } from '@/core/widgets';
import { BlockRef } from '@/core/widgets/block/block-ui.widget';
import { SnackBarRef } from '@/core/widgets/snackbar/snackbar-ui.widget';
import { DialogRef, DialogUIWidget } from '@/core/widgets/dialog/dialog-ui.widget';

interface Props {
	children: JSX.Element;
}

const blockUI = createRef<BlockRef>();
const dialogUI = createRef<DialogRef>();
export const snackBarUI = createRef<SnackBarRef>();

export const UiProvider: FC<Props> = ({children}) => {

	const rootUI = useMemo(()=> {
		return {
			blockUI,
			dialogUI,
			snackBarUI,
		};
	},[]);

	return (
		<UIContext.Provider value={rootUI}>
			{children}
			<BLockUIWidget ref={blockUI} />
			<DialogUIWidget ref={dialogUI} />
			<SnackBarUIWidget ref={snackBarUI} />
		</UIContext.Provider>
	);
};
