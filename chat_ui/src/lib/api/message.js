import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import useChatStore from "../store/store";
import toast from "react-hot-toast";
const useGetMessages = () => {
  const { selectedConversation, setMessages } = useChatStore();
  const { isLoading, data, isError } = useQuery({
    queryKey: ["messages", selectedConversation?._id],
    queryFn: async () => {
      if (selectedConversation) {
        const response = await axios.get(
          `/api/message/get/${selectedConversation?._id}`
        );
        if (response.data.message) {
          setMessages([]);
          return "";
        }
        setMessages(response?.data?.messages);
        return response.data.messages;
      }
    },
  });
  return { isLoading, isError, data };
};

const useSendMessage = () => {
  const { selectedConversation, messages, setMessages } = useChatStore();
  const sendMessage = useMutation({
    mutationFn: async (message) => {
      const response = await axios.post(
        `/api/message/send/${selectedConversation?._id}`,
        { message }
      );
      return response.data;
    },
    onError: () => {
      toast.error("Internal server error");
    },
    onSuccess: (data) => {
      const newMessage = data.chat;
      const allMessage = [...messages, newMessage];
      setMessages(allMessage);
    },
  });
  return sendMessage;
};

export { useGetMessages, useSendMessage };
