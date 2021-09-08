import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props.post._id}`}>
        <img className="post-image" src={props.post.imgURL} alt={props.title} />
        <div className="title">{props.post.title}</div>
        <div className="category">{props.post.category}</div>
        <p className="article">{props.post.article}</p>
        <div className="author">{props.post.author}</div>
      </Link>
    </>
  );
};

export default Post;
