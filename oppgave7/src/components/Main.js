import { useState } from 'react'
import Search from './Search'
import Movies from './Movies'

const Main = () => {
  const [search, setSearch] = useState('Star%20Wars')
  const [movies, setMovies] = useState([])

  return (
    <>
      <Search setSearch={setSearch} />
      <Movies movies={movies} />
    </>
  )
}

export default Main
