import { lazy } from 'react';
import { DeliveryLayout } from 'layouts/DeliveryLayout';
import { Route, Routes } from 'react-router-dom';

const AccountSettings = lazy(() => import('./AccountSettings'));
const ZonesSettings = lazy(() => import('./ZonesSettings'));
const CreateZones = lazy(() => import('./CreateZones'));
const EditZone = lazy(() => import('./EditZone'));

export const AccountRouter = () => (
  <DeliveryLayout>
    <Routes>
      <Route path="/zones/create" element={<CreateZones />} />
      <Route path="/zones/:id/edit" element={<EditZone />} />
      <Route path="/zones" element={<ZonesSettings />} />
      <Route path="/" element={<AccountSettings />} />
    </Routes>
  </DeliveryLayout>
);
