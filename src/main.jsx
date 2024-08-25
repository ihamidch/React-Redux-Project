import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './APP/Store.js'; // Ensure correct path to your store file

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Corrected the prop to lowercase 'store' */}
    <App />
  </Provider>,
);
