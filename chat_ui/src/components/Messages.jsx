import { useRef } from "react";
import useListenMessages from "../Hooks/useListenMessages";
import { useGetMessages } from "../lib/api/message";
import useChatStore from "../lib/store/store";
import Message from "./Message";
const Messages = () => {
  const { messages } = useChatStore();
  const { isLoading, isError } = useGetMessages();
  const messagesEndRef = useRef(null);
  useListenMessages();
  // Adjust the interval here
  if (isLoading) {
    return (
      <div className="w-full h-[380px] flex justify-center items-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }
  if (isError) {
    console.log("error");
  }
  return (
    <div className="w-full h-[380px]">
      {messages.length === 0 ? (
        <div className="w-full h-[100%] flex justify-center items-center text-black">
          Write message to send
        </div>
      ) : (
        <div className="px-4  h-[380px] overflow-y-scroll">
          {messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
