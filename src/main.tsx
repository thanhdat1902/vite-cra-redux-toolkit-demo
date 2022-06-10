import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App'
import './index.css'
const container = document.getElementById('root')!;
const root = createRoot(container);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
