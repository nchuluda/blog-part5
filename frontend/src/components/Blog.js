import { useState } from 'react'

const Blog = ({blog}) => {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const collapsedView = () => (
    <div>
        {blog.title} <button onClick={toggleExpanded}>view</button>
    </div>
  )

  const expandedView = () => (
    <div>
      {blog.title} <button onClick={toggleExpanded}>hide</button><br/>
      {blog.url}<br/>
      {blog.likes} <button>like</button><br/>
      {blog.author}
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