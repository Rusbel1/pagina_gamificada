import { Route, Routes } from 'react-router-dom';
import { ChallengesRoutes } from '../challenges';
import { LessonPage } from '../lessons/page';
import { LessonsRouter } from '../lessons';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<ChallengesRoutes />} />
      <Route path='/lesson/*' element={<LessonsRouter />} />
      <Route path='/auth/*' element={<AuthRoutes />} />

    </Routes>
  );
};
