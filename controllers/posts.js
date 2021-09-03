import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};
