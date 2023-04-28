import { Suspense, lazy } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { MainLayout } from 'layouts';

const Auth = lazy(() => import('./Auth'));
const Landing = lazy(() => import('./Landing'));

export const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Suspense>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
);
