import { BsSend } from "react-icons/bs";
import { useSendMessage } from "../lib/api/message";
import { useState } from "react";
const MessageInput = () => {
  const { mutateAsync: sendMessage } = useSendMessage();
  const [input, setInput] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    await sendMessage(input);
    setInput("");
  };
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="send a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          onClick={handleClick}
        >
          <BsSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
