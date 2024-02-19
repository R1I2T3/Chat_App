import useChatStore from "../lib/store/store";
import { useEffect } from "react";
import notificationSound from "../assets/notification.mp3";
const useListenMessages = () => {
  const { socket, messages, setMessages } = useChatStore();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
