import { lazy } from 'react';
import { AuthLayout } from 'layouts/AuthLauout';
import { Route, Routes, Navigate } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const CreateAccount = lazy(() => import('./CreateAccount'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const ResetPassword = lazy(() => import('./ResetPassword'));

export const AuthRouter = () => (
  <AuthLayout>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  </AuthLayout>
);
