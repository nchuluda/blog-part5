import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm /> updates parent state and calls onSubmit', async () => {
  const createBlog = jest.fn()
  const user = userEvent.setup()

  render(<BlogForm createBlog={createBlog} />)

  const inputTitle = screen.getByPlaceholderText('title')
  const inputAuthor = screen.getByPlaceholderText('author')
  const inputUrl = screen.getByPlaceholderText('url')
  const sendButton = screen.getByText('save')

  await user.type(inputTitle, 'The Martha Blog')
  await user.type(inputAuthor, 'Martha Stewart')
  await user.type(inputUrl, 'https://www.themarthablog.com')
  await user.click(sendButton)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog.mock.calls[0][0].title).toBe('The Martha Blog')
  expect(createBlog.mock.calls[0][0].author).toBe('Martha Stewart')
  expect(createBlog.mock.calls[0][0].url).toBe('https://www.themarthablog.com')
})