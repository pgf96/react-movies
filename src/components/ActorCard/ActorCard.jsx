import { Card} from "react-bootstrap"

const ActorCard = ({actor}) => {
    return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='https://ionicframework.com/docs/img/demos/avatar.svg' />
            <Card.Body>
            <Card.Title>{actor}</Card.Title>
            </Card.Body>
            </Card>
        )
}
export default ActorCard