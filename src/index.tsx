import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthContextProvider } from './context/AuthContext';
<<<<<<< HEAD
import { HospitalNameContextProvider } from './context/HospitalNameContext';
import { HospitalAddContextProvider } from './context/HospitalAddContext';
=======
import { MyStatusContextProvider } from './context/MyStatusContext';
>>>>>>> develop

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
<<<<<<< HEAD
      <HospitalAddContextProvider>
        <HospitalNameContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </HospitalNameContextProvider>
      </HospitalAddContextProvider>
=======
      <MyStatusContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MyStatusContextProvider>
>>>>>>> develop
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
