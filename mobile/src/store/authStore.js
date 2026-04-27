import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,

  setUser: (user) => set({ user }),
  
  setAccessToken: (token) => set({ accessToken: token }),

  setAuth: (user, token) => set({
    user,
    accessToken: token,
    isAuthenticated: true,
  }),

  logout: () => set({
    user: null,
    accessToken: null,
    isAuthenticated: false,
  }),
}))