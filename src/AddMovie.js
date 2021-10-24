import Button from "@mui/material/Button";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import{useHistory}from "react-router-dom";


export function AddMovie({ movie, setMovies }) {
    const history=useHistory();
    const [title, setTitle] = useState();
    const [plot, setPlot] = useState();
    const [poster, setPoster] = useState();
    const [year, setYear] = useState();
    const createMovie = (newMovie) => {
        fetch("https://6173de78110a74001722318d.mockapi.io/movies", {
            method:"POST",
            body:JSON.stringify(newMovie),
            headers:{"conste-type":"application/json"},
        })
        .then(data=>data.json())
        .then(data=>history.push("/movielist"))
        // .then(mv=>setMovie(mv))
        
           
        };
        const addmovie=()=>{
            const newMovie={
                title: title,
                plot: plot,
                posterUrl: poster,
                year: year,
            };
            createMovie(newMovie)
            // history.push("/movielist")
        };
    
    // const addmovie = () => {
    //     setMovies([
    //         ...movie,
    //         {
    //             title: title,
    //             plot: plot,
    //             posterUrl: poster,
    //             year: year,
    //         },
    //     ])
    //     console.log(movie)
    //     localStorage.setItem("movies", JSON.stringify([
    //         ...movie,
    //         {
    //             title: title,
    //             plot: plot,
    //             posterUrl: poster,
    //             year: year,
    //         },
    //     ]))
    //     history.push("/movielist")
    // }
    return (
        <div >
            <br/>
            <Box
                sx={{
                    width: 900,
                    maxWidth: "100%",
                    margin: "auto",
                }}
            >
                <TextField
                    className="inputField"
                    fullWidth
                    id="fullWidth"
                    onChange={(event) => setTitle(event.target.value)}
                    label="Movie name"
                    variant="outlined" />
                <br />
                <br />
                <TextField
                    fullWidth
                    id="fullWidth"
                    onChange={(event) => setYear(event.target.value)}
                    label="Year of Release"
                    variant="outlined" />
                <br />
                <br />
                <TextField
                    fullWidth
                    id="fullWidth"
                    onChange={(event) => setPlot(event.target.value)}
                    label="Movie plot"
                    variant="outlined" />
                <br />
                <br />
                <TextField
                    fullWidth
                    id="fullWidth"
                    onChange={(event) => setPoster(event.target.value)}
                    label="Movie poster Url"
                    variant="outlined" />
                <br />
                <br />
            </Box>
            <Button variant="contained" color="success" onClick={addmovie}>
                Add Movie
            </Button>
            <br />
            <br />
        </div>
    );
}
