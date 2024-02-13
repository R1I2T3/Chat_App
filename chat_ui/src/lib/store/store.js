import { create } from "zustand";

const useChatStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("chat_app_Data")) || null,
  setUser: (currentUser) => set({ user: currentUser }),
}));

export default useChatStore;
