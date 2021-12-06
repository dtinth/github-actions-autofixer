import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  expect(document.body.textContent).toMatchInlineSnapshot(
    `"Edit src/App.js and save to reload.Learn React"`,
  )
})
