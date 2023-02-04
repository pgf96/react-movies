import { useParams } from "react-router-dom"

const MovieDetailPage = ({moviesList}) => {
  const {movieName} = useParams()

  const movie = moviesList.find(movie => movie.title === movieName)

  return (
    <>
      <div>MovieDetailPage</div>
      <h1>{movie.title}</h1>
      <p>
        {movie.releaseDate}
      </p>
      <ul>
          {
            movie.cast.map((actor,idx) => 
               <li key={idx}>{actor}</li>
          )}
      </ul>
      <img src={movie.posterPath} alt="hello" />    
    </>

  )
}
export default MovieDetailPage