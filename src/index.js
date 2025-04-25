// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; // Tailwind styles
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css'; // Optional Tailwind CSS if you want styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
