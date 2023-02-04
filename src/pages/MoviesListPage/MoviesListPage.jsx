import MovieCard from "../../components/MovieCard/MovieCard"
import  Row  from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"

const MoviesListPage = ({moviesList}) => {
  
  return (
    <div>
      <Row xs={4} md={5} className="g-6" style={{padding:'0 20px 0 20px'}}>
        {moviesList.map((movie,index) => {
          return (<Col key={index}> <MovieCard movie={movie} index={index} key={index} /> </Col>)
        }) 
        }
      </Row>
      
    </div> 
  )
}
export default MoviesListPage