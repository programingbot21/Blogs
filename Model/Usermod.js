import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        requried: true,
        trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      
      lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
  },
  { timestamps: true } // Adds createdAt & updatedAt automatically
);

const User = mongoose.model("User", UserSchema);
export default User;
