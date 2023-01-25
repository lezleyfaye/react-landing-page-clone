import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'Avenir Next LT Pro', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          margin: 0px;
          background-color: #f4f6f8;
        }
        ul {
          list-style: none;
          padding-left: 0px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
