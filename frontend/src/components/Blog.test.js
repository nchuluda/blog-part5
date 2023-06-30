import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Blog from './Blog'

test('collapsed view renders title and author, not url or likes', () => {
  const blog = {
    title: 'b3ta the best of the internet',
    author: 'Rob',
    url: 'www.b3ta.co.uk',
    likes: 6
  }

  const { container } = render(<Blog blog={blog} />)

  const div = container.querySelector('.blog')

  expect(div).toHaveTextContent('b3ta the best of the internet')
  expect(div).toHaveTextContent('Rob')
  expect(div).not.toHaveTextContent('www.b3ta.co.uk')
  expect(div).not.toHaveTextContent('6')

})

test('url and likes shown after view button has been clicked', async () => {
  const blog = {
    title: 'b3ta the best of the internet',
    author: 'Rob',
    url: 'www.b3ta.co.uk',
    likes: 6,
    user: { name: 'Tester' }
  }

  const testUser = {
    name: 'Tester',
    username: 'tester'
  }

  const { container } = render(<Blog blog={blog} user={testUser} />)

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)

  const div = container.querySelector('.blog')

  expect(div).toHaveTextContent('www.b3ta.co.uk')
  expect(div).toHaveTextContent('6')

})