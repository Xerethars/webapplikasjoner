import { render, screen, fireEvent } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import ComponentToTest from '../components/ComponentToTest'
import useCountPower from '../hooks/useCountPower'

describe('Testing the component', () => {
  it('Count initialized correctly', () => {
    render(<ComponentToTest />)
    const initialValue = 0
    expect(document.querySelector('p')).toHaveTextContent(
      `Current count value = ${initialValue}`
    )
  })

  it('Count increased after onclick properly', () => {
    render(<ComponentToTest />)
    const button = document.querySelector('button')
    fireEvent.click(button)

    expect(document.querySelector('p')).toHaveTextContent(
      'Current count value = 1'
    )
  })

  it('Count multiplied correctly', () => {
    render(<ComponentToTest />)
    const pField = document.querySelector('p')

    expect(pField).toHaveTextContent('Count multiplied by 100 = 0')

    fireEvent.click(screen.getByText('Increment count!'))
    expect(pField).toHaveTextContent('Count multiplied by 100 = 100')

    fireEvent.click(screen.getByText('Increment count!'))
    expect(pField).toHaveTextContent('Count multiplied by 100 = 200')
  })
})

describe('Testing custom hook', () => {
  it('Hook initialized with count to be 0, and useEffect updates count when count is updated in ComponentToTest', () => {
    const { result: hook } = renderHook(() => useCountPower())
    expect(hook.current.powerCount).toBe(0)
  })
})
