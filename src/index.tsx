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
import { MyStatusContextProvider } from './context/MyStatusContext';
import { SeasonContextProvider } from './context/SeasonContext';
import { MyPagePopupContextProvider } from './context/MyPagePopupContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MyPagePopupContextProvider>
        <SeasonContextProvider>
          <HospitalAddContextProvider>
            <HospitalNameContextProvider>
              <MyStatusContextProvider>
                <AuthContextProvider>
                  <App />
                </AuthContextProvider>
              </MyStatusContextProvider>
            </HospitalNameContextProvider>
          </HospitalAddContextProvider>
        </SeasonContextProvider>
      </MyPagePopupContextProvider>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
