import { Suspense, lazy } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { MainLayout } from 'layouts';

const Auth = lazy(() => import('./Auth'));
const Delivery = lazy(() => import('./Delivery'));
const Map = lazy(() => import('./Map'));

export const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Suspense>
        <Routes>
          <Route index element={<Delivery />} />
          <Route path="/map" element={<Map />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
);
