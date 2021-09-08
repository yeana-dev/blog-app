import { useState, useEffect } from "react";

import { getPosts } from "../../services/posts";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await getPosts();
      setPosts(resp);
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <Layout>
      <div className="post">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Posts;
