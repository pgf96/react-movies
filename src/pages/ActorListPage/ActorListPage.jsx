import ActorCard from '../../components/ActorCard/ActorCard'
import  Row  from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"

const ActorListPage = ({moviesList, user}) => {
  const actorsList = moviesList.reduce((cast, movie) => 
    [...cast, ...movie.cast],[]
  )
  const actors = Array.from(new Set(actorsList))
  console.log(actors)

  return (
    
    <div>
      <Row xs={4} md={5} className="g-4" style={{padding:'0 20px 0 20px'}}>
        {actors.map((actor,idx) => (
          <Col key={idx}>
            <ActorCard actor={actor} idx={idx} key={idx} />
          </Col>
        ))}
      </Row>
    </div> 
  )
}
export default ActorListPage