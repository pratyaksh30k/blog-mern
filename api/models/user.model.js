import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  }
},{
  timestamps: true   //done to keep track of time of creation and time of updation of the user account.
  }
);

const User = mongoose.model("User", userSchema);

export default User;