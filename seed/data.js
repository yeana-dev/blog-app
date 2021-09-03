import db from '../db/connection.js'
import Post from "../models/post.js"

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  // products data that we want inserted into database
  const posts = [
    {
      title: "Intro to HTML",
      category: "HTML",
      imgURL: "container",
      article: "Once upon a time...",
      author: "Van Van J"
    },
    {
      title: "Intro to CSS",
      category: "CSS",
      imgURL: "containerCSS",
      article: "Once upon a colorful time...",
      author: "Krusty the colorful clown"
    }
  ]
  await Post.insertMany(posts)
  console.log('Created posts!')

  db.close()
}
insertData()
