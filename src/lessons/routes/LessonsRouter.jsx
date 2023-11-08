import { Route, Routes } from 'react-router-dom';
import { LessonPage } from '../page';
import { LessonsLayout } from '../layout';

export const LessonsRouter = () => {
  return (
    <Routes>
      <Route element={<LessonsLayout />}>
        <Route path='*/:id' element={<LessonPage />} />
      </Route>
    </Routes>
  );
};
