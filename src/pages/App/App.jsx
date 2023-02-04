import './App.css';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from "../../data.js"
import { useState } from 'react';
import { Routes, Route, } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (username) => {
    setUser(username)
  }

  return (
    <div className="App">
      {user ? 
        <>
        <NavBar user={user}/>
        <Routes>
          <Route path="/" element={<MoviesListPage moviesList={movies} />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage moviesList={movies}/>} />
          <Route path="/actors/" element={<ActorListPage moviesList={movies} />} />
        </Routes>
        </> 
      : 
        <LoginPage handleLogin={handleLogin}/>}
  </div>
  );
}

export default App;
