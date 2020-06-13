import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Users, Folder } from 'heroicons-react';
import Api, { basePath, rootPath } from './api';
import { useApi } from './hooks/use-api';

import Layout from './tailwindui/base/layout';

import Dashboard from './pages/dashboard';

const menuClass =
  'mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150';

const menu = [
  {
    href: '/',
    title: 'Dashboard',
    icon: <Home className={menuClass} />,
    active: true
  },
  {
    href: '/',
    title: 'Team',
    icon: <Users className={menuClass} />
  },
  {
    href: '/',
    title: 'Projects',
    icon: <Folder className={menuClass} />
  }
];

const App = () => {
  console.log('App rendering');
  return (
    <Layout menu={menu}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
};
export default App;
