import { Suspense, lazy } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { MainLayout } from 'layouts';

const Auth = lazy(() => import('./Auth'));
const Account = lazy(() => import('./Account'));
const Delivery = lazy(() => import('./Delivery'));
const Map = lazy(() => import('./Map'));

export const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Suspense>
        <Routes>
          <Route index path="/events" element={<Delivery />} />
          <Route path="/events/grouped" element={<Delivery grouped />} />
          <Route path="/map" element={<Map />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/events" replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
);
