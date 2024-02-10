import mongoose from "mongoose";

const connect = async () => {
  try {
    const connectionUrl = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Mongodb is connected at localhost");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
