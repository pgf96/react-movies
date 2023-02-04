import { Link } from 'react-router-dom';

const NavBar = ({user}) => {
  return (
    <nav>
      <Link to="/">movies</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">actors</Link>
      <p> user: {user.username} </p>
    </nav>
  );
}
export default NavBar