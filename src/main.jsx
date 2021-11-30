import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './route/index';


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>loading...</div>}>
      <Router />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
