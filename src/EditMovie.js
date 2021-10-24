import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateStoredMovies } from "./App";


export function EditMovie({
  movie, setMovies
}) {
  const history = useHistory();
  const { id } = useParams();
  const movies = movie[id];
  let [title, setTitle] = useState();
  let [plot, setPlot] = useState();
  let [poster, setPoster] = useState();
  let [year, setYear] = useState();

  // function crtEdit(data){
  //   if(data!==undefined){
  //    return movies.data=data;
  //   }
  // }
  //working good
  const updateEdited = () => {
    // console.log(crtEdit(title));
    // crtEdit(plot);
    // crtEdit(poster);
    // crtEdit(year);
    // console.log(title, plot, year)
      //working good
    if(title!==undefined ){
      movies.title=title;
       }
       if(plot!==undefined ){
        movies.plot=plot;
         }
         if(poster!==undefined ){
          movies.poster=poster;
           }
           if(year!==undefined ){
            movies.year=year;
             }
    //  movies.title = title;

    // movies.plot = plot;
    // movies.poster = poster;
    // movies.year = year;
    setMovies([...movie]);
    updateStoredMovies([...movie]);
    history.push("/movielist");


  };

  return (
    <div >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <br/>
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
