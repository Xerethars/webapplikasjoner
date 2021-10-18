import { useState } from 'react'

const Search = ({ search, setSearch }) => {
  const [text, setText] = useState('')

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  )
}
export default Search
