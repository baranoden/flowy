import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    info: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "user-datas" }
);

export default mongoose.model("UserData", User);
