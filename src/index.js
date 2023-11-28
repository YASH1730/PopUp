import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// this is wrapper over the APP for make aware the Components about the Store
import { Provider } from 'react-redux';
import {store} from "./store/store"

// for persisting the store
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
</Provider>
  </React.StrictMode>
);

