import { useState } from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import { AddMovie } from "./AddMovie";
import { movies } from "./movies";
import { MovieCard } from "./MovieCard";

localStorage.setItem("movies", JSON.stringify(movies));
const getFromStorage=(key)=>JSON.parse(localStorage.getItem(movies))
function App() {
  const [movie, setMovies] = useState(movies);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movielist">Movile List</Link>
          </li>
          <li>
            <Link to="/addmovie">Add Movie</Link>
          </li>
        </ul>
      </nav>

      <Switch>
      <Route   path="/movielist/:id">
      <AboutMovie 
      />
        </Route>
        <Route path="/movielist">
          <div className="MovieCard">
            {movie.map((movies, index) => {
              return (
                <MovieCard
                  ind={index}
                  img={movies.posterUrl}
                  title={movies.title}
                  plot={movies.plot}
                  movies={movie}
                  setMovies={setMovies}
                  year={movies.year}
                  id={index}
                />
              );
            })}
          </div>
        </Route>
        <Route path="/addmovie">
          <AddMovie movie={movie} setMovies={setMovies} />
        </Route>
       
       
        <Route path="/">
          <h1>Welcome to our Movie collections</h1>
        </Route>
      </Switch>
    </div>
  );
}
function AboutMovie(
    {
        title,
        year,
        runtime,
        genres,
    director,
    actors,
    plot,
    posterUrl
    
    }
){
const{id}=useParams();
const movie=getFromStorage('movies')[id];
    return(
        <div>
      <h2>Title: {movie.title}</h2> 
     {/* <img src={posterUrl} alt="Movie poster"></img>
      <h2>Year of release: {year}</h2>
      <h2>Runtime: {runtime} mins</h2>
      <h2>Genres: {genres}</h2>
      <h2>Director: {director}</h2>
      <h2>Actors: {actors}</h2>
      <h2>Plot: {plot}</h2> */}
      </div>
    )
}
export default App;
