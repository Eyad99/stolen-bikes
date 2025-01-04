import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from './components/theme-provide.tsx';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/toaster.tsx';
import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
					<App />
					<Toaster />
				</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right' />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
);
