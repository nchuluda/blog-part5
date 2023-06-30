import { useState } from 'react'

const BlogForm = ({ createBlog }) => {

  const [newBlogName, setNewBlogName] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newBlogName,
      author: newBlogAuthor,
      url: newBlogUrl
    })

    setNewBlogName('')
    setNewBlogAuthor('')
    setNewBlogUrl('')
  }

  return (
    <div>
      <h2>Add a new blog</h2>

      <form onSubmit={addBlog}>
        <div>
        title:
          <input
            value={newBlogName}
            name="title"
            placeholder="title"
            onChange={event => setNewBlogName(event.target.value)}
          />
        </div>
        <div>
        author:
          <input
            value={newBlogAuthor}
            name="author"
            placeholder="author"
            onChange={event => setNewBlogAuthor(event.target.value)}
          />
        </div>
        <div>
        url:
          <input
            value={newBlogUrl}
            name="url"
            placeholder="url"
            onChange={event => setNewBlogUrl(event.target.value)}
          />
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default BlogForm