import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useAuthStore = create(
  persist(
    immer((set, get) => ({
      name:null,
      id:null,
      email:null,
      token: null,
      role:null,

      login: (data) => {
        // console.log(data);
        
        set((state) => {
          state.token = data.token;
          state.name=data.username;
          state.id=data._id;
          state.role=data.role;
          state.email=data.email;
        });
      },

      // Logout: clear user and token
      logout: () => {
        set((state) => {
          state.user = null;
          state.token = null;
          state.role=null;
        });
      },

      // Synchronous check if user has a token
      isLoggedIn: () => !!get().token,

      // Async check with hydration
      isAuthenticated: async () => {
        if (!useAuthStore.persist.hasHydrated()) {
          await new Promise((resolve) => {
            const unsub = useAuthStore.persist.onFinishHydration(() => {
              unsub();
              resolve();
            });
          });
        }
        return !!get().token;
      },
    })),
    {
      name: 'auth-storage', // localStorage key
      storage: createJSONStorage(() => window.localStorage), // use localStorage in React
    }
  )
);

export default useAuthStore;
