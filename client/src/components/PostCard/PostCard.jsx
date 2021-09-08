import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = (props) => {
  return (
    <div className="postcard">
      <Link to={`/posts/${props._id}`}>
        <div className="postcard-title">{props.title}</div>
        <div className="postcard-author">{props.author}</div>
        <div className="postcard-category">{props.category}</div>
        <img src={props.imgURL} alt="postcard-pic" />
      </Link>
    </div>
  );
};

export default PostCard;
