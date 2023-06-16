import { Route, Routes } from 'react-router-dom';
import { HomeChallenges } from '../pages';

export const ChallengesRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeChallenges />} />
    </Routes>
  );
};
