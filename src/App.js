import { useState } from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import { AddMovie } from "./AddMovie";
import { movies } from "./movies";
import { MovieCard } from "./MovieCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
localStorage.setItem("movies", JSON.stringify(movies));
const getFromStorage=(key)=>JSON.parse(localStorage.getItem(key))
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
        <Route path="/movielist/edit/:id">
       
        <EditMovie setMovies={setMovies} 
        />
        
        </Route>
      <Route   path="/movielist/:id">
        
      <AboutMovie/>
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
          <AddMovie movies={movie} setMovies={setMovies} />
        </Route>
       
       
        <Route path="/">
          <h1>Welcome to our Movie collections</h1>
        </Route>
      </Switch>
    </div>
  );
}
function AboutMovie(){
const{id}=useParams();
const movie=getFromStorage('movies')[id];  
    return(
        <div>
      <h2>Title: {movie.title}</h2> 
     <img src={movie.posterUrl} alt="Movie poster"></img>
      <h2>Year of release: {movie.year}</h2>
      <h2>Runtime: {movie.runtime} mins</h2>
      <h2>Genres: {movie.genres}</h2>
      <h2>Director: {movie.director}</h2>
      <h2>Actors: {movie.actors}</h2>
      <h2>Plot: {movie.plot}</h2>
      </div>
    )
}

function EditMovie({
 
  setMovies
}){
  const{id}=useParams();
  const movie=getFromStorage('movies')[id];
  const [title, setTitle] = useState();
  const [plot, setPlot] = useState();
  const [poster, setPoster] = useState();
  const [year, setYear] = useState();
  const updateEdited=()=>{
      movie.title=title
      movie.plot=plot
      movie.poster=poster
      movie.year=year
      setMovies([...movie])
      console.log(movie)
  }

  return(
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={(event)=>setTitle(event.target.value)}
          id="outlined"
          label="Title"
          defaultValue={movie.title}
        />
        <TextField
          onChange={(event)=>setYear(event.target.value)}
          id="outlined"
          label="Year"
          defaultValue={movie.year}
        />
        <TextField
          onChange={(event)=>setPlot(event.target.value)}
          id="outlined"
          label="plot"
          defaultValue={movie.plot}
        />
        <TextField
          onChange={(event)=>setPoster(event.target.value)}
          id="outlined"
          label="Poster Url"
          defaultValue={movie.posterUrl}
        />

      </div>
      </Box>
      <Button onClick={updateEdited} variant="contained" color="success">
        Submit
      </Button>
    </div>
  )
}
export default App;
