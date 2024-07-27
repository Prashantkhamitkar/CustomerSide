import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import { PersistGate } from 'redux-persist/integration/react';
import {configureStore} from "./store/store";
import Loader from './Pages/MSP/common/Loader';

const {store,persistor}=configureStore({});

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader/>}>
      <React.Fragment>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.Fragment>
    </PersistGate>
  </Provider>
);
reportWebVitals();
// serviceWorker.unregister();

