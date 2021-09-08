import { useState, useEffect } from "react";
import PostCard from "./PostCard/PostCard.jsx";
import { getPosts } from "../../services/posts";

import "./PostFeed.css";

const ProductCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <PostCard
          _id={post._id}
          title={post.title}
          category={post.category}
          imgURL={post.imgURL}
          article={post.article}
          author={post.author}
        />
      ) : null
    );

  return (
    <div className="post-feed">
      <div className="latest">LATEST</div>
      <div className="posts">{CARDS}</div>
    </div>
  );
};

export default ProductCards;
