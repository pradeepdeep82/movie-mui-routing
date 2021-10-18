import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getFromStorage, updateStoredMovies } from "./App";

export function EditMovie({
  movie, setMovies
}) {
  const history = useHistory();
  const { id } = useParams();
  const movies = getFromStorage('movies')[id];
  const [title, setTitle] = useState();
  const [plot, setPlot] = useState();
  const [poster, setPoster] = useState();
  const [year, setYear] = useState();
  // const tempMovie=movies;
  const updateEdited = () => {
    movies.title = title;
    movies.plot = plot;
    movies.poster = poster;
    movies.year = year;
    setMovies([...movie]);
    updateStoredMovies([...movie]);
    history.push("/movielist");


  };

  return (
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
            onChange={(event) => setTitle(event.target.value)}
            id="outlined"
            label="Title"
            defaultValue={movies.title} />
          <TextField
            onChange={(event) => setYear(event.target.value)}
            id="outlined"
            label="Year"
            defaultValue={movies.year} />
          <TextField
            onChange={(event) => setPlot(event.target.value)}
            id="outlined"
            label="plot"
            defaultValue={movies.plot} />
          <TextField
            onChange={(event) => setPoster(event.target.value)}
            id="outlined"
            label="Poster Url"
            defaultValue={movies.posterUrl} />

        </div>
      </Box>
      <Button onClick={updateEdited} variant="contained" color="success">
        Submit
      </Button>
    </div>
  );
}
