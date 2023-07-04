import { lazy } from 'react';
import { DeliveryLayout } from 'layouts/DeliveryLayout';
import { Route, Routes } from 'react-router-dom';

const AccountSettings = lazy(() => import('./AccountSettings'));

export const AccountRouter = () => (
  <DeliveryLayout>
    <Routes>
      <Route path="/" element={<AccountSettings />} />
    </Routes>
  </DeliveryLayout>
);
