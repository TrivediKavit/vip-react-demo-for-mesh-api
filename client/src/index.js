import React from 'react';
import {createRoot} from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css';
import App from './App';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
