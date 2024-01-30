import { FC } from 'react';
import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';

import { StyledDataGrid } from './data-grid.styles';

interface Props {
	columns: GridColDef[];
	rows: readonly GridValidRowModel[];
	showFooter?: boolean;
	onPageChange?: (params: number) => void;
	pageSize?: number;
	rowCount?: number;
}

export const DataGridWidget: FC<Props> = (props) => {
	const { 
		columns, 
		rows, 
		showFooter = false, 
		onPageChange, 
		pageSize = 10,
		rowCount = rows.length,
	} = props;

	return (
		<StyledDataGrid
			autoHeight
			columns={columns}
			disableSelectionOnClick
			hideFooter={!showFooter}
			getRowClassName={(params) =>
				params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
			}
			rows={rows}
			onPageChange={onPageChange}
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			paginationMode='server'
			rowCount={rowCount}
		/>
	);
};
