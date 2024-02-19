import useChatStore from "../lib/store/store";
import { useEffect } from "react";
import notificationSound from "../assets/notification.mp3";
import toast from "react-hot-toast";
const useListenMessages = () => {
  const { socket, messages, setMessages, selectedConversation } =
    useChatStore();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      if (newMessage.username !== selectedConversation.username) {
        return toast.success(
          `you have got message from ${newMessage.username}`
        );
      }
      setMessages([...messages, newMessage.message]);
    });
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages, selectedConversation]);
};

export default useListenMessages;
