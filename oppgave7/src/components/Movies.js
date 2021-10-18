import Movie from './Movie'
import '../main.scss'

const Movies = ({ movies }) => (
  <div>
    <ul className="gridWrapper">
      {movies != null ? (
        movies.map((movie) => (
          <li>
            <Movie movie={movie} />
          </li>
        ))
      ) : (
        <p>Search returned nothing</p>
      )}
    </ul>
  </div>
)

export default Movies
