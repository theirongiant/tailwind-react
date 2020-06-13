import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles.css';
import App from './app.js';
import { basePath, rootPath } from './api';
import { version } from '../package.json';

console.log(`React version: ${React.version}`);
console.log(`PatchJS version: ${version}`);
console.log(`Base: ${basePath}`);
console.log(`Root: ${rootPath}`);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
