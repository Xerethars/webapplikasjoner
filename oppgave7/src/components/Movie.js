import { useEffect, useState } from 'react'

const Movie = ({ movie }) => {
  const [movieDetails, setMovieDetails] = useState()

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=e89c6379&i=${movie.imdbID}`
      )
      const data = await response.json()
      setMovieDetails(data)
    }
    fetchMovie()
  }, [movie])

  return (
    <>
      <p>Title: {movie.Title}</p>
      <p>Year: {movie.Year}</p>
      <p>Released: {movieDetails?.Released}</p>
      <p>Length: {movieDetails?.Runtime}</p>
      <p>PG-Rating: {movieDetails?.Rated}</p>
      <p>IMDB rating: {movieDetails?.imdbRating}</p>
      <p>Metascore: {movieDetails?.Metascore}</p>
      <p>Plot: {movieDetails?.Plot}</p>
    </>
  )
}

export default Movie
