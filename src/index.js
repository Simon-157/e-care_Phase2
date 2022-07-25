import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './contexts/userContext';
import { ErrorBoundary } from './pages/errors/error-boundary/ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <UserProvider>
        <App />
      </UserProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

