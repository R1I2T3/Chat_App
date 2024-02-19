import { create } from "zustand";

const useChatStore = create((set) => ({
  // user
  user: JSON.parse(localStorage.getItem("chat_app_Data")) || null,
  setUser: (currentUser) => set({ user: currentUser }),
  // conversations
  selectedConversation: null,
  setSelectedConversation: (selectedConversationByUser) =>
    set({ selectedConversation: selectedConversationByUser }),
  // messages for given conversation
  messages: [],
  setMessages: (messages) => set({ messages }),
  // socket connection
  socket: null,
  setSocket: (socket) => set({ socket }),
  // online users
  onlineUser: [],
  setOnlineUser: (onlineUser) => set({ onlineUser }),
}));

export default useChatStore;
