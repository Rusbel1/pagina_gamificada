import { create } from 'zustand'
export const userStore = create((set) => ({
    id:'',
    first_name: '',
    points_user: 0,
    setUser: (id,first_name,points_user) => set({ id,first_name,points_user }),
  }))