import { useEffect, useState } from 'react'
import Search from './Search'
import Movies from './Movies'

const Main = () => {
  const [search, setSearch] = useState('Star%20Wars')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://www.omdbapi.com/?apikey=e89c6379&s=${search}`
      )
      const data = await resp.json()
      setMovies(data.Search)
      console.log(data)
    }
    fetchData()
  }, [search])

  return (
    <>
      <Search setSearch={setSearch} />
      <Movies movies={movies} />
    </>
  )
}

export default Main
