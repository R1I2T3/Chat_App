import { useRef, useEffect } from "react";
import useListenMessages from "../Hooks/useListenMessages";
import { useGetMessages } from "../lib/api/message";
import useChatStore from "../lib/store/store";
import Message from "./Message";
const Messages = () => {
  const { messages } = useChatStore();
  const { isLoading, isError } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
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
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}
        </div>
      )}
      <div />
    </div>
  );
};

export default Messages;
