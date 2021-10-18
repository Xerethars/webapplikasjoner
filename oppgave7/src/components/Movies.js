import Movie from './Movie'

const Movies = ({ movies }) => (
  <div className="gridWrapper">
    <ul>
      {movies.map((movie) => (
        <li>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  </div>
)

export default Movies
