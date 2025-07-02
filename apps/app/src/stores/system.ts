import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { defaultColors } from '../theme';
import { SystemState } from './types';

export const useSystemStore = create<SystemState>()(
  persist(
    set => ({
      token: undefined,
      setToken: async token => {
        console.log('Setting token', token);

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
      setPushToken: pushToken => {
        console.log('Saving push token', pushToken);
        return set(() => ({ pushToken }));
      },

      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn: boolean) => {
        console.log('Setting isLoggedIn', isLoggedIn);
        if (isLoggedIn) {
          return set({ isLoggedIn });
        }
        return set({ isLoggedIn, user: undefined, token: undefined });
      },

      user: undefined,
      setUser: user => {
        console.log('Setting user', user);
        return set(() => ({ user }));
      },

      theme: defaultColors,
      setTheme: theme => {
        console.log('Setting theme', theme);
        return set(() => ({ theme }));
      },

      lastRead: 0,
      setLastRead: lastRead => {
        console.log('Setting last read', lastRead);
        return set(() => ({ lastRead }));
      },
    }),
    {
      name: 'system',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
