import { render, screen, fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
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
  it('Hook initialized with powerCount to be 0', () => {
    const count = 0
    const { result: hook } = renderHook(() => useCountPower(count))

    expect(hook.current.powerCount).toBe(0)
  })

  it('Hook powerCount variable updated properly for every count update', () => {
    let count = 0
    const { result, rerender } = renderHook(() => useCountPower(count))

    expect(result.current.powerCount).toBe(0)

    count = 5
    rerender()
    expect(result.current.powerCount).toBe(25)

    count = 10
    rerender()
    expect(result.current.powerCount).toBe(100)
  })

  it('Hook function calculates power correctly', () => {
    const count = 0
    const { result } = renderHook(() => useCountPower(count))

    expect(result.current.powerCount).toBe(0)

    act(() => {
      result.current.calculatePower(5)
    })

    expect(result.current.powerCount).toBe(25)
  })
})
