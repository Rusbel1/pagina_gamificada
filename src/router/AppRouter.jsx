import { Route, Routes } from 'react-router-dom';
import { ChallengesRoutes } from '../challenges';
import { LessonPage } from '../lessons/page';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Layout } from '../components/Layout';
import { useState } from 'react';
import { useEffect } from 'react';
import { userStore } from '../store/UserStore';
import { axiosController } from '../helper/axiosController';


export const AppRouter = () => {
  const setUser = userStore((state) => state.setUser)
  const [isloget, setloget] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setloget(true)
      getUser()
    }
  })
const getUser = () => {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      token: token
    }
  };
  axiosController.get('/usuariosByToken', headers)
    .then(response => {
      console.log(response.data);
      setUser(response.data)
    })
    .catch(error => {
      console.log(error);
    });
}

  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/auth/*' element={<AuthRoutes />} />
        {isloget && <Route path='/lesson/:uid' element={<LessonPage />} />}
        {isloget && <Route path='/*' element={<ChallengesRoutes />} />}
        <Route path='*' element={<AuthRoutes />} />
      </Route>

    </Routes>
  );
};
