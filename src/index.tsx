import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthContextProvider } from './context/AuthContext';
import { HospitalNameContextProvider } from './context/HospitalNameContext';
import { HospitalAddContextProvider } from './context/HospitalAddContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HospitalAddContextProvider>
        <HospitalNameContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </HospitalNameContextProvider>
      </HospitalAddContextProvider>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
