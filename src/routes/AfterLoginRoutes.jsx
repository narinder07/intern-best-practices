import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';

const AfterLoginRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AfterLoginRoutes;
