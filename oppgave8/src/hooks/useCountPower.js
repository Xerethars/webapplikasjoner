import { useState, useEffect } from 'react'

const useCountPower = (count = 0) => {
  const [powerCount, setPowerCount] = useState(0)

  useEffect(() => {
    setPowerCount(count ** 2)
  }, [count])

  return { powerCount }
}

export default useCountPower
