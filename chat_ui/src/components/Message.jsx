import useChatStore from "../lib/store/store";
import formatTimeAgo from "../utils/dateFormat";
/* eslint-disable react/prop-types */
const Message = ({ message }) => {
  const { user, selectedConversation } = useChatStore();
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div
      className={`chat  ${
        user._id === message.sender ? "chat-end" : "chat-start"
      }`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              (user._id === message.sender
                ? user.profilePic
                : selectedConversation?.profilePic) || "/defaultProfilePic.png"
            }
            alt="avatar"
          />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${
          user._id === message.sender ? "bg-blue-500" : ""
        } ${shakeClass}`}
      >
        {message?.message}
      </div>
      <div className="text-sm">{formatTimeAgo(message.createdAt)}</div>
    </div>
  );
};

export default Message;
