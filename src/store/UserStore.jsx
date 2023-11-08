import { create } from 'zustand'
export const userStore = create((set) => ({
    id:'65496408e2116ff1747a496f',
    first_name: 'rusbel',
    points_user: 0,
    setUser: (id,first_name,points_user) => set({ id,first_name,points_user }),
  }))