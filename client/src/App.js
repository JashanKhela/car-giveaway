import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'; // Create this component for the home page
import EnterContest from './pages/EnterContest'; // Create this component for the home page

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/enter',
    element: <EnterContest />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
