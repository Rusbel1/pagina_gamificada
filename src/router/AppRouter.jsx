import { Route, Routes } from 'react-router-dom';
import { ChallengesRoutes } from '../challenges';
import { LessonPage } from '../lessons/page';
import { LessonsRouter } from '../lessons';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<ChallengesRoutes />} />
      <Route path='/lesson/*' element={<LessonsRouter />} />
    </Routes>
  );
};
