import { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog }) => {

  const [expanded, setExpanded] = useState(false)

  const addLike = () => {
    const likedBlog = {
      ...blog,
      likes: blog.likes + 1
    }
    blogService.update(blog.id, likedBlog)
  }
  
  const collapsedView = () => (
    <div>
        {blog.title} <button onClick={() => setExpanded(!expanded)}>view</button>
    </div>
  )

  const expandedView = () => (
    <div>
      {blog.title} {blog.author} <button onClick={() => setExpanded(!expanded)}>hide</button><br/>
      {blog.url}<br/>
      {blog.likes} <button onClick={addLike}>like</button><br/>
      {blog.user.name}
    </div>
  )

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      {expanded ? expandedView() : collapsedView()}
    </div>
  )
}

export default Blog