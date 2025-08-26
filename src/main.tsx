import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '@/layout'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import BookPage from 'pages/client/book';
import AboutPage from 'pages/client/about';
import LoginPage from 'pages/client/auth/login';
import RegisterPage from 'pages/client/auth/register';
import './styles/global.scss'
import HomePage from './pages/client/home';
import { App, ConfigProvider } from 'antd';
import { AppProvider } from 'components/context/app.context';
import ProtectedRoute from '@/components/auth';
import DashBoardPage from '@/pages/admin/dashboard';
import ManageBookPage from '@/pages/admin/manage.book';
import ManageOrderPage from '@/pages/admin/manage.order';
import ManageUserPage from '@/pages/admin/manage.user';
import LayoutAdmin from '@/components/layout/layout.admin';
import enUS from 'antd/es/locale/en_US';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/book",
        element: <BookPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <div>checkout page</div>
          </ProtectedRoute>
        ),
      },
    ]
  },
  {
    path: "admin",
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        )
      },
      {
        path: "book",
        element: (
          <ProtectedRoute>
            <ManageBookPage />
          </ProtectedRoute>
        )
      },
      {
        path: "order",
        element: (
          <ProtectedRoute>
            <ManageOrderPage />
          </ProtectedRoute>
        )
      },
      {
        path: "user",
        element: (
          <ProtectedRoute>
            <ManageUserPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <div>admin page</div>
          </ProtectedRoute>
        ),
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Layout /> */}
    <App>
      <AppProvider>
        <ConfigProvider locale={enUS}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </AppProvider>
    </App>
  </React.StrictMode>
)
