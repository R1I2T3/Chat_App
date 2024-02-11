import Chat from "../model/Chat.model.js";
import Message from "../model/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const user = req.user;
    const { id: receiverId } = req.params;
    const { message } = req.body;
    if (!message) {
      return res.status(401).json({ error: "Enter message to be send" });
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
    res.status(201).json({ message: "New message created", chat: newMessage });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const getMessage = async () => {};

export { sendMessage, getMessage };
