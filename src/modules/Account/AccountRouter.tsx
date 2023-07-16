import { lazy } from 'react';
import { DeliveryLayout } from 'layouts/DeliveryLayout';
import { Route, Routes } from 'react-router-dom';

const AccountSettings = lazy(() => import('./AccountSettings'));
const ZonesSettings = lazy(() => import('./ZonesSettings'));
const CreateZones = lazy(() => import('./CreateZones'));

export const AccountRouter = () => (
  <DeliveryLayout>
    <Routes>
      <Route path="/zones/create-zones" element={<CreateZones />} />
      <Route path="/zones" element={<ZonesSettings />} />
      <Route path="/" element={<AccountSettings />} />
    </Routes>
  </DeliveryLayout>
);
