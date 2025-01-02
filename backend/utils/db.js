const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 50000,
        socketTimeoutMS: 45000,
      }
    );

    if (!connectionInstance) {
      console.log("MongoDB connection failed");
    }
    console.log(
      "MongoDB connected Successfully on server : " +
        connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MongoDB connection failed due to some error :", error);
  }
};
module.exports = connectDB;
