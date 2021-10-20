import { useParams, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getFromStorage } from "./App";

export function AboutMovie() {
  const history = useHistory();
  const { id } = useParams();
  const movie = getFromStorage('movies')[id];
  return (
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
      <br /><br />
      <Button onClick={() => history.goBack()} variant="contained" color="primary">
        <ArrowBackIosIcon />
        Back
      </Button>
      {/* <Button onClick={()=>history.goForward()} variant="contained" color="primary">
              <ArrowForwardIosIcon/>
              Next
            </Button> */}
    </div>
  );
}
