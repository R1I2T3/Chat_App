import Chat from "../model/Chat.model.js";
import Message from "../model/message.model.js";
import User from "../model/user.model.js";
import { getReceiverSocketId, io } from "../socket/index.js";
const sendMessage = async (req, res) => {
  try {
    const user = req.user;
    const { id: receiverId } = req.params;
    const { message } = req.body;
    if (!message) {
      return res.status(401).json({ error: "Enter message to be send" });
    }
    if (receiverId === user._id) {
      return res.status(401).json({ error: "you can't message yourself" });
    }
    const newMessage = new Message({
      message,
      sender: user._id,
      receiver: receiverId,
    });
    let isConversationExists = await Chat.findOne({
      participants: { $all: [receiverId, user._id] },
    });
    if (!isConversationExists) {
      isConversationExists = await Chat.create({
        participants: [user._id, receiverId],
      });
    }
    if (newMessage) {
      isConversationExists.messages.push(newMessage._id);
    }
    await Promise.all([isConversationExists.save(), newMessage.save()]);
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", {
        message: newMessage,
        username: user.username,
      });
    }
    res.status(201).json({ message: "New message created", chat: newMessage });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { id: receiverId } = req.params;
    const Messages = await Chat.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    if (!Messages) {
      return res
        .status(200)
        .json({ message: "No message found in following chat" });
    }
    return res.status(200).json(Messages);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export { sendMessage, getMessage };
