import { create } from "zustand";

const useChatStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("chat_app_Data")),
  setUser: () => set((currentUser) => ({ user: currentUser })),
}));

export default useChatStore;
