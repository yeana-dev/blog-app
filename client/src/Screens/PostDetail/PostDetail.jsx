import { useParams, Link } from "react-router-dom"
import Layout from '../../components/Layout/Layout'
import { getPosts, deletePosts } from '../../services/products'
import { useEffect, useState } from "react"
const PostDetail = (props) => {
  const [posts, setPosts] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const posts = getPost(id)
      setPosts(posts)
      setLoaded(true)
    }
    fetchPost()
    console.log(posts)
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="post-detail">
        <img className="post-detail-image" src={posts.imgURL} alt={posts.title} />
        <div className="detail">
          <div className="title">{posts.title}</div>
          <div className="category">{`${posts.category}`}</div>
          <p className="article">{posts.article}</p>
          <div className='author'>{posts.author}</div>
          <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/posts/${posts._id}/edit`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deletePost(posts._id)}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail