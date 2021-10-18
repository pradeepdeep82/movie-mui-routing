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
    const updateArr = () => {
        setMovies([
            ...movie,
            {
                title: title,
                plot: plot,
                posterUrl: poster,
                year: year,
            },
        ])
        console.log(movie)
        localStorage.setItem("movies", JSON.stringify([
            ...movie,
            {
                title: title,
                plot: plot,
                posterUrl: poster,
                year: year,
            },
        ]))
        history.push("/movielist")
    };

    return (
        <div>
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
            <Button variant="contained" color="success" onClick={updateArr}>
                Add Movie
            </Button>
            <br />
            <br />
        </div>
    );
}
