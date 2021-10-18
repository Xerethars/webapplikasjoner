import { useState } from 'react'
import Search from './Search'
import Movies from './Movies'

const Main = () => {
  const [search, setSearch] = useState('Star%20Wars')
  const [movies, setMovies] = useState([
    { title: 'title1' },
    { title: 'title2' },
  ])

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Movies movies={movies} />
    </>
  )
}

export default Main
