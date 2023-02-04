import { Link } from 'react-router-dom';
import { Card, Button,} from "react-bootstrap"

const MovieCard = ({movie, idx}) => {
  return (
    // display title, releaseDate, posterPath
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterPath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.releaseDate}
        </Card.Text>
        <Link to={`/movies/${movie.title}`}>
          <Button variant="primary"> bootin </Button>  
        </Link>
      </Card.Body>
      </Card>
  )
}
export default MovieCard