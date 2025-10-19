import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Post", PostSchema);
