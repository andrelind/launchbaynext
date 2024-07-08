import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { defaultColors } from '../theme';
import { SystemState } from './types';

export const systemStore = create<SystemState>()(
  persist(
    (set) => ({
      token: undefined,
      setToken: async (token) => {
        if (!token) {
          return set({
            token: undefined,
            user: undefined,
          });
        }

        const t: any = jwtDecode(token);
        const user = {
          id: t.sub,
          name: t.name,
          provider: t.provider,
          email: t.email,
        };

        return set(() => ({ token, user }));
      },

      pushToken: undefined,
      setPushToken: (pushToken) => set(() => ({ pushToken })),

      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return set({ isLoggedIn });
        }
        return set({ isLoggedIn, user: undefined, token: undefined });
      },

      user: undefined,
      setUser: (user) => set(() => ({ user })),

      theme: defaultColors,
      setTheme: (theme) => set(() => ({ theme })),

      lastRead: 0,
      setLastRead: (lastRead) => set(() => ({ lastRead })),
    }),
    {
      name: 'system',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
