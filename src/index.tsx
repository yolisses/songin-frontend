import './styles/logo.css';
import './styles/index.css';
import './styles/loading.css';
import './styles/animations.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FpjsProvider as FingerprintProvider }
  from '@fingerprintjs/fingerprintjs-pro-react';

import { App } from './App';
import { reportWebVitals } from './generated/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <FingerprintProvider
    loadOptions={{
      apiKey: 'jGZosJoDqwNUMvoEnlMj',
      endpoint: 'https://fingerprint.sonhin.com',
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FingerprintProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
