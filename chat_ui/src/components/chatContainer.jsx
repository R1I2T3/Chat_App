import { useState } from "react";
import { TiMessages } from "react-icons/ti";
const ChatContainer = () => {
  const [isChatSelected, setIsChatSelected] = useState(false);
  return (
    <>
      {isChatSelected ? (
        <div>chat is selected</div>
      ) : (
        <div className="h-full flex-col w-full flex justify-center items-center">
          <h1 className="text-bold text-2xl text-pretty">Welcome 👋 User</h1>
          <h1 className="text-bold text-2xl text-pretty">
            Select a chat to start messaging
          </h1>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      )}
    </>
  );
};

export default ChatContainer;
