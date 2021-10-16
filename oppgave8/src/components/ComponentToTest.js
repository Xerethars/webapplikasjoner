import { useState } from 'react'
import useCountPower from '../hooks/useCountPower'

const ComponentToTest = () => {
  const [count, setCount] = useState(0)
  const { powerCount } = useCountPower(count)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h2>Hello</h2>
      <h2>This is a component to run tests on</h2>
      <button type="button" onClick={handleClick}>
        Increment count!
      </button>
      <p>
        Hook value to be tested: (Current count value = {count} and power is =
        {powerCount}) //Returns power of count <br />
        Count multiplied by 100 = {count * 100}
      </p>
    </>
  )
}

export default ComponentToTest
