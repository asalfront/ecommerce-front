import { createContext, RefObject } from 'react';

import { BlockRef } from '@/core/widgets/block/block-ui.widget';
import { SnackBarRef } from '@/core/widgets/snackbar/snackbar-ui.widget';
import { DialogRef } from '@/core/widgets/dialog/dialog-ui.widget';

interface Props {
	blockUI: RefObject<BlockRef>;
	snackBarUI: RefObject<SnackBarRef>;
	dialogUI: RefObject<DialogRef>;
}

export const UIContext = createContext({} as Props);
