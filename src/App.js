import { useEffect, useState } from "react";
import  React from 'react';
import { Switch , Route, Link } from "react-router-dom";
import "./App.css";
import { AddMovie } from "./AddMovie";
import { movies } from "./movies";
import { MovieCard } from "./MovieCard";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { EditMovie } from "./EditMovie";
import { AboutMovie } from "./AboutMovie";
import { Paper } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { yellow } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import { About } from "./About";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
localStorage.setItem("movies", JSON.stringify(movies));
export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));
export const updateStoredMovies = (updatedMovie) =>
  localStorage.setItem("movies", JSON.stringify(updatedMovie));
  

 
  function App() {
    const[darkMode, setDarkMode]=useState(false);
    const theme=createTheme({
      palette:{
        mode:darkMode?"dark":"light"
      }
    });
  // const [movie, setMovies] = useState(movies);
  const [movie, setMovies] = useState([]);
  // called only when mounted or change the url or conditional rendering
  const getMovies=()=>{
    fetch("https://6173de78110a74001722318d.mockapi.io/movies", {method:"GET"})
    .then(data=>data.json())
    .then(mvs=>setMovies(mvs))
  };
  useEffect(getMovies,[]);

  return (
    <ThemeProvider theme={theme}>
      <Paper className="background" >
    <div className="App">
        
      <Box className="navBar" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              <Link className="link" to="/">
                <HomeIcon className="icon"/>Home
              </Link>
              <Link className="link" to="/movielist">
               <LocalMoviesIcon className="icon"/> Movie List
              </Link>
              <Link className="link" to="/addmovie">
               <AddIcon className="icon"/> Add Movie
              </Link>
              <Link className="link" to="/about">
              <InfoIcon className="icon" /> About
              </Link>
              <IconButton className="themeIcon"
             onClick={()=>setDarkMode(!darkMode)}
              
              aria-label="Theme change"
            >
              {darkMode ? <DarkModeIcon /> : <LightModeIcon sx={{ color: yellow[500] }} />}
            </IconButton>
            
              
            </Typography>
          </Toolbar>
        </AppBar>
       
      </Box>

      <Switch>
        <Route path="/about">
          <About/>
        </Route>
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
                  // id={index}
                  id={movies.id}
                  rating={movies.rating}
                  
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
    </Paper>
    </ThemeProvider>
  );
}

export default App;
