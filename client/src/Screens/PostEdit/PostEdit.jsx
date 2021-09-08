import { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getPost, updatePost } from "../../services/products";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    article: "",
    category: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />;
  }

  return (
    <Layout>
      <div className="post-edit">
        <div className="image-container">
          <img className="edit-post-image" src={post.imgURL} alt={post.name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={post.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="title"
            value={post.title}
            name="title"
            required
            onChange={handleChange}
          />
          <input
            className="author"
            placeholder="author"
            value={post.author}
            name="author"
            required
            onChange={handleChange}
          />
          <input
            className="input-category"
            placeholder="category"
            value={post.category}
            name="category"
            required
            onChange={handleChange}
          />

          <textarea
            className="textarea-article"
            rows={10}
            cols={10}
            placeholder="article"
            value={post.article}
            name="article"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
