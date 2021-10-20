import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { AddMovie } from "./AddMovie";
import { movies } from "./movies";
import { MovieCard } from "./MovieCard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { EditMovie } from "./EditMovie";
import { AboutMovie } from "./AboutMovie";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
localStorage.setItem("movies", JSON.stringify(movies));
export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));
export const updateStoredMovies = (updatedMovie) =>
  localStorage.setItem("movies", JSON.stringify(updatedMovie));
function App() {
  const [movie, setMovies] = useState(movies);
  return (
    <div className="App">
      <Box className="navBar" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/movielist">
                Movie List
              </Link>
              <Link className="link" to="/addmovie">
                Add Movie
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Switch>
        <Route path="/movielist/edit/:id">
          <EditMovie setMovies={setMovies} movie={movie} />
        </Route>
        <Route path="/movielist/:id">
          <AboutMovie />
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
export default App;
