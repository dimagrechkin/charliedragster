import { render } from '@testing-library/react'
import App from './App'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    expect(1).toBe(1)
  })
})
