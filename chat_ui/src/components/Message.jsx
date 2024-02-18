import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="/defaultProfilePic.png" alt="" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">what {"'"} up</div>
    </div>
  );
};

export default Message;
