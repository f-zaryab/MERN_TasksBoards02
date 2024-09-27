import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "MDE: First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "MDE: First name is required"],
  },
  username: {
    type: String,
    required: [true, "MDE: First name is required"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    minlength: 3,
    maxlength: 50,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    maxlength: 20,
  },
});

const User = model("User", userSchema);

export default User;
