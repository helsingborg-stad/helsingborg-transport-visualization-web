import { lazy } from 'react';
import { AuthLayout } from 'layouts/AuthLauout';
import { Route, Routes, Navigate } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const CreateAccount = lazy(() => import('./CreateAccount'));

// TODO: add forgot password and reset password to routes
export const AuthRouter = () => (
  <AuthLayout>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  </AuthLayout>
);
