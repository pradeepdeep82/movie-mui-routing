import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// const updateStoredMovies = (updatedMovie) =>
  // localStorage.setItem("movies", JSON.stringify(updatedMovie));
export function MovieCard({
  img,
  title,
  plot,
  movies,
  setMovies,
  ind,
  year,
  id,
  rating
  
}) {
  const [show, setShow] = useState(false);
  const [disLike, setDislike] = useState(0);
  const [like, setLike] = useState(0);
  // const deleteMovie = () => {
  //   let tempMovie = movies;
  //   movies.forEach((movie, indx) => {
  //     if (ind === indx) {
  //       tempMovie.splice(indx, 1);
  //     }
  //   });
  //   setMovies([...tempMovie]);
  //   updateStoredMovies(tempMovie);
  // };
  const deleteMovie=()=>{
    fetch("https://6173de78110a74001722318d.mockapi.io/movies/"+id, {method:"DELETE"})
    .then(data=>data.json())
    .then(data=>getMovies())
  };

  const history = useHistory();
  const getMovies=()=>{
    fetch("https://6173de78110a74001722318d.mockapi.io/movies", {method:"GET"})
    .then(data=>data.json())
    .then(mvs=>setMovies(mvs))
  };
  useEffect(getMovies,[setMovies]);
  return (
    <div className="MovieCard">
     
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt="Movie poster"
          height="500"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} ({year})
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="show and hide plot"
            >
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Detail info of the movie"
              onClick={() => {
                history.push("/movielist/" + id);
              }}
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              aria-label="Edit the movie"
              onClick={() => {
                history.push("/movielist/edit/" + id);
              }}
            >
              <EditIcon />
            </IconButton>
            <h4>⭐{rating}</h4>
          </Typography>
          {show ? (
            <Typography variant="body2" color="text.secondary">
              {plot}
            </Typography>
          ) : (
            ""
          )}
        </CardContent>
        <CardActions>
          <IconButton aria-label="like" onClick={() => setLike(like + 1)}>
            <Badge badgeContent={like} color="success">
              👍
            </Badge>
          </IconButton>
          <IconButton
            aria-label="dislike"
            onClick={() => setDislike(disLike + 1)}
          >
            <Badge badgeContent={disLike} color="error">
              👎
            </Badge>
          </IconButton>
          <Button
            onClick={deleteMovie}
            aria-label="delete movie"
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
