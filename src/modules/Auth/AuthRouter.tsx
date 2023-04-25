import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Login = lazy(() => import('./Login'));

export const AuthRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/auth/login" />} />
  </Routes>
);
