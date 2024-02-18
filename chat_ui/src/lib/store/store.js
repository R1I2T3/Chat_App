import { create } from "zustand";

const useChatStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("chat_app_Data")) || null,
  setUser: (currentUser) => set({ user: currentUser }),
  selectedConversation: null,
  setSelectedConversation: (selectedConversationByUser) =>
    set({ selectedConversation: selectedConversationByUser }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useChatStore;
