import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthContextProvider } from './context/AuthContext';
import { MyStatusContextProvider } from './context/MyStatusContext';
import { SeasonContextProvider } from './context/SeasonContext';
import { MyPagePopupContextProvider } from './context/MyPagePopupContext';
import { MainPopupContextProvider } from './context/MainPopupContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainPopupContextProvider>
        <MyPagePopupContextProvider>
          <SeasonContextProvider>
            <MyStatusContextProvider>
              <AuthContextProvider>
                <App />
              </AuthContextProvider>
            </MyStatusContextProvider>
          </SeasonContextProvider>
        </MyPagePopupContextProvider>
      </MainPopupContextProvider>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
