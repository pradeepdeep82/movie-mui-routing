import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

export function MovieCard({ img, title, plot, movies, setMovies, ind, year, id }) {
    const [disLike, setDislike] = useState(0);
    const [like, setLike] = useState(0);
    const deleteMovie = () => {
        let tempMovie = movies;
        movies.forEach((movie, indx) => {
            if (ind === indx) {
                tempMovie.splice(indx, 1);
            }
        });
        setMovies([...tempMovie]);
    };
    const history = useHistory();
    return (
        <div className="MovieCard">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt="Movie poster"
                    height="500"
                    image={img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title} ({year})
                        <IconButton color="primary" aria-label="Detail info of the movie"
                            onClick={() => {
                                history.push("/movielist/" + id);

                            }}>
                            <InfoIcon />
                        </IconButton>
                        <IconButton  aria-label="Detail info of the movie"
                            onClick={() => {
                                history.push("/movielist/edit/" + id);

                            }}>
                            <EditIcon />
                        </IconButton>
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {plot}
                    </Typography>
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
