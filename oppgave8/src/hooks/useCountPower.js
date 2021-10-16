import { useState, useEffect } from 'react'

const useCountPower = (count = 0) => {
  const [powerCount, setPowerCount] = useState(0)

  // This is just for the purpose of running act() function in tests
  const calculatePower = (newCount) => {
    setPowerCount(newCount ** 2)
  }

  useEffect(() => {
    setPowerCount(count ** 2)
  }, [count])

  return { powerCount, calculatePower }
}

export default useCountPower
