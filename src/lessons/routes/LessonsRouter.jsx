import { Route, Routes } from 'react-router-dom';
import { LessonPage } from '../page';

export const LessonsRouter = () => {
  return (
    <Routes>
      <Route path='/:id' element={<LessonPage/>} />
      
    </Routes>
  );
};
