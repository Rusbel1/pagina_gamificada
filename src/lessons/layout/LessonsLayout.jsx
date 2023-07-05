import React from 'react';
import { LessonsHeader } from '../components';
import { Outlet } from 'react-router-dom';

export const LessonsLayout = () => {
  return (
    <>
      <LessonsHeader />
      <Outlet />
    </>
  );
};
