import { useState } from 'react'

const Blog = ({ blog, addLike, removeBlog, user }) => {

  const [expanded, setExpanded] = useState(false)

  const removeButton = () => {
    if (user.username === blog.user.username) {
      return (
        <button onClick={() => removeBlog(blog)}>remove</button>
      )
    } else return
  }

  const collapsedView = () => (
    <div>
      {blog.title} {blog.author} <button onClick={() => setExpanded(!expanded)}>view</button>
    </div>
  )

  const expandedView = () => (
    <div>
      {blog.title} {blog.author} <button onClick={() => setExpanded(!expanded)}>hide</button><br/>
      {blog.url}<br/>
      {blog.likes} <button onClick={() => addLike(blog)}>like</button><br/>
      {blog.user.name}<br/>
      {removeButton()}
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
    <div style={blogStyle} className='blog'>
      {expanded ? expandedView() : collapsedView()}
    </div>
  )
}

export default Blog