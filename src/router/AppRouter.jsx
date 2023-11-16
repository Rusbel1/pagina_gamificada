import { Route, Routes } from 'react-router-dom';
import { ChallengesRoutes } from '../challenges';
import { LessonPage } from '../lessons/page';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Layout } from '../components/Layout';
import { useState } from 'react';
import { useEffect } from 'react';
import { userStore } from '../store/UserStore';
import { axiosController } from '../helper/axiosController';
import { LessonsRouter } from '../lessons/routes/LessonsRouter';
import { EditProfile } from '../profile/editProfile';

export const AppRouter = () => {
  const setUser = userStore((state) => state.setUser)
  const [isloget, setloget] = useState(false)
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      setloget(true)
      getUser()
    }
  })
const getUser = () => {
  const headers = {
    headers: {
      token: token
    }
  };
  axiosController.get('/usuariosByToken', headers)
    .then(response => {
      const user = response.data[0]
      setUser( user.uid,user.first_name, user.points_user)
    })
    .catch(error => {
      console.log(error);
    });
}

  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/auth/*' element={<AuthRoutes />} />
        {isloget && <Route path='/editprofile' element={<EditProfile />} />}
        {isloget && <Route path='/lesson/:uid/*' element={<LessonsRouter />} />}
        {isloget && <Route path='/*' element={<ChallengesRoutes />} />}
        <Route path='*' element={<AuthRoutes />} />
      </Route>

    </Routes>
  );
};
