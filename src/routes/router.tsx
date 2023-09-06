import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { SearchPage as MainPage } from '../pages/SearchPage';
import { MainRouteErrorBoundary } from '../components/MainRouteErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <MainRouteErrorBoundary />,
  },
]);
