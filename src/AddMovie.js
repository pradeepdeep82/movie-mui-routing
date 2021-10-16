import Button from "@mui/material/Button";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function AddMovie({ movie, setMovies }) {
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
        ]);
    };

    return (
        <div>
            <Box
                sx={{
                    width: 500,
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
                    variant="filled" />
                <br />
                <br />
                <TextField
                    fullWidth
                    id="fullWidth"
                    onChange={(event) => setYear(event.target.value)}
                    label="Year of Release"
                    variant="filled" />
                <br />
                <br />
                <TextField
                    fullWidth
                    id="fullWidth"
                    onChange={(event) => setPlot(event.target.value)}
                    label="Movie plot"
                    variant="filled" />
                <br />
                <br />
                <TextField
                    fullWidth
                    id="fullWidth"
                    onChange={(event) => setPoster(event.target.value)}
                    label="Movie poster Url"
                    variant="filled" />
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
