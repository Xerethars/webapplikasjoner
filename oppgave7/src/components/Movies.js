import Movie from './Movie'
import '../main.scss'

const Movies = ({ movies }) => (
  <div>
    <ul className="gridWrapper">
      {movies.map((movie) => (
        <li>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  </div>
)

export default Movies
