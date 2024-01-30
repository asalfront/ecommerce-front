import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@mui/material/styles';
import 'reflect-metadata';

import { appRouter } from '@/core/routes/app.route';
import { store, persistor } from './core/redux/store';
import { theme } from './core/theme/theme';
import { UiProvider } from './core/context';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<UiProvider>
							<RouterProvider router={appRouter} />
						</UiProvider>
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>,
);
