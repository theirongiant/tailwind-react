import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Api, { basePath, rootPath } from './api';
import { useApi } from './hooks/use-api';

import Layout from './tailwindui/layout/layout';

const App = () => {
  console.log('App rendering');
  return <Layout title="Howdy">Hello biatches!</Layout>;
};
export default App;
