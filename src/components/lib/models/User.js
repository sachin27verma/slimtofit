import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Id: String,
  wishlist: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  email:String,
  password:String,
  name:String,
  phone:String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;