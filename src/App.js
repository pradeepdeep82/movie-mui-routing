import { useState } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import "./App.css";
import { AddMovie } from "./AddMovie";
import { movies } from "./movies";
import { MovieCard } from "./MovieCard";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { EditMovie } from "./EditMovie";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
localStorage.setItem("movies", JSON.stringify(movies));
export const getFromStorage=(key)=>JSON.parse(localStorage.getItem(key))
export const updateStoredMovies=(updatedMovie)=>localStorage.setItem("movies",JSON.stringify(updatedMovie))
function App() {
  const [movie, setMovies] = useState(movies);
  return (
    <div className="App">
      <Box className="navBar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/movielist">Movile List</Link>
          <Link className="link" to="/addmovie">Add Movie</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

      <Switch>
        <Route path="/movielist/edit/:id">
       
        <EditMovie setMovies={setMovies} movie={movie}
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
          <AddMovie movie={movie} setMovies={setMovies} />
        </Route>
       
       
        <Route path="/">
          <h1>Welcome to our Movie collections</h1>
        </Route>
      </Switch>
    </div>
  );
}
function AboutMovie(){
  const history=useHistory();
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
      <iframe width="900" height="506" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br/><br/>
      <Button onClick={()=>history.goBack()} variant="contained" color="primary">
        <ArrowBackIosIcon/>
        Back
      </Button>
      {/* <Button onClick={()=>history.goForward()} variant="contained" color="primary">
        <ArrowForwardIosIcon/>
        Next
      </Button> */}
      </div>
    )
}

export default App;
