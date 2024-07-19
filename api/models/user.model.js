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
  },
  profilePicture:{
    type: String,
    default: "https://th.bing.com/th/id/OIP.FtRH1BiHAgErda4nzZOTYwHaHa?rs=1&pid=ImgDetMain",
  }
},{
  timestamps: true   //done to keep track of time of creation and time of updation of the user account.
  }
);

const User = mongoose.model("User", userSchema);

export default User;