import { Route, Routes } from 'react-router-dom';
import { ChallengesRoutes } from '../challenges';
import { LessonPage } from '../lessons/page';
import { LessonsRouter } from '../lessons';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Layout } from '../components/Layout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/*' element={<ChallengesRoutes />} />
        <Route path='/lesson/*' element={<LessonsRouter />} />
        <Route path='/auth/*' element={<AuthRoutes />} />
      </Route>

    </Routes>
  );
};
