import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
      required: true,
    },
    imgURL: { type: String, required: true },
    article: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("posts", Post);
