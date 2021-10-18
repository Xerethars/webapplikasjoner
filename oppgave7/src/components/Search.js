import { useState } from 'react'

const Search = ({ setSearch }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(text)
  }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e)
        }}
      >
        Search
      </button>
    </div>
  )
}
export default Search
