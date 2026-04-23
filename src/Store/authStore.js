import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialUser = {
  id: null,
  name: null,
  email: null,
  role: null,
};

const useAuthStore = create(
  persist(
    immer((set, get) => ({
      user: initialUser,
      token: null,

      // LOGIN
      login: (data) => {
        set((state) => {
          state.token = data.token;
          state.user = {
            id: data._id,
            name: data.username,
            email: data.email,
            role: data.role,
          };
        });
      },

      // LOGOUT
      logout: () => {
        set((state) => {
          state.token = null;
          state.user = initialUser;
        });
      },

      // UPDATE PROFILE (future use)
      updateUser: (newData) => {
        set((state) => {
          state.user = { ...state.user, ...newData };
        });
      },

      // SIMPLE CHECK
      isLoggedIn: () => !!get().token,

      // SAFE AUTH CHECK (after hydration)
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
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
        user: state.user,
      }), // only persist required data
    }
  )
);

export default useAuthStore;