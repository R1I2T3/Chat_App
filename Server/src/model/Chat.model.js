import { Schema, model } from "mongoose";

const chatSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Chat = model("Chat", chatSchema);

export default Chat;
