import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useChatStore from "../lib/store/store";
const ChatContainer = () => {
  const { selectedConversation } = useChatStore();
  return (
    <div className="flex flex-col h-full w-full">
      {selectedConversation ? (
        <div>
          <div className="bg-blue-700 px-4 py-2 mb-2 pr-3 w-[90%] m-auto">
            <span className="label-text">To:</span>{" "}
            <span className="label-text-900 font-bold">
              {selectedConversation?.username}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </div>
      ) : (
        <div className="h-full flex-col w-full flex justify-center items-center">
          <h1 className="text-bold text-2xl text-pretty">Welcome 👋 User</h1>
          <h1 className="text-bold text-2xl text-pretty">
            Select a chat to start messaging
          </h1>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
