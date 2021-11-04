import Button from "@mui/material/Button";
// import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import{useHistory}from "react-router-dom";
import * as yup from 'yup'; 
import { useFormik,  } from "formik";

export function AddMovie({ movie, setMovies }) {
    const history=useHistory();
    const aboutValidationShema=yup.object({
        title: yup
        .string()
        .min(3, "Need Bigger name")
        .required("Cool name is in need"),
        // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched" ),
  
        plot:yup
        .string()
        .min(20, "Please provide longer plot detais")
        .max(100, "Please provide shorter plot detais")
        .required("Lets think about plot details"),
        posterUrl:yup
        .string()
        .required("A cool poster is needed"),
        year:yup
        .string()
        .required("year of relese is needed"),
        rating:yup
        .string()
        .required("star rating of the movie is needed")
      })
    const {handleSubmit, values, handleChange, handleBlur, errors, touched}=
    useFormik({
    initialValues:{ 
        title: "",
        plot: "",
        posterUrl:"" ,
        year: "",
        rating:""
    },
    // validate:validateAboutForm,
    validationSchema:aboutValidationShema,
    onSubmit:(values) => {
      console.log("onSubmit", values);
      fetch("https://6173de78110a74001722318d.mockapi.io/movies", {
                method:"POST",
                body:JSON.stringify(values),
                headers:{"content-type":"application/json"},
            })
            .then(data=>data.json())
            .then(data=>history.push("/movielist"))
    }
  })
    // const [title, setTitle] = useState();
    // const [plot, setPlot] = useState();
    // const [poster, setPoster] = useState();
    // const [year, setYear] = useState();
    // const [rating, setRating]=useState();

   
        // const addmovie=()=>{
        //     const newMovie={
        //         title: title,
        //         plot: plot,
        //         posterUrl: poster,
        //         year: year,
        //         rating:rating,
        //     };
        //     fetch("https://6173de78110a74001722318d.mockapi.io/movies", {
        //         method:"POST",
        //         body:JSON.stringify(newMovie),
        //         headers:{"content-type":"application/json"},
        //     })
        //     .then(data=>data.json())
        //     .then(data=>history.push("/movielist"))



        //     // .then(mv=>setMovie(mv))
            
        //     // history.push("/movielist")
        // };
    
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
            <form onSubmit={handleSubmit}>
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
                    // id="fullWidth"
                    id="title"
                    name="title"
                    value={values.title}
                    // onChange={(event) => setTitle(event.target.value)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Movie name"
                    variant="outlined" 
                    minRows="0"
                    error={errors.title && touched.title}
                    helperText={errors.title && touched.title && errors.title }
                    />
                    
                <br />
               
                <br />
                <TextField
                    fullWidth
                    // id="fullWidth"
                    id="rating"
                    name="rating"
                    value={values.rating}
                    // onChange={(event) => setRating(event.target.value)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Movie ⭐Rating"
                    variant="outlined"
                    error={errors.rating && touched.rating}
                    helperText= {errors.rating && touched.rating && errors.rating } />
                   
                <br />
               
                <br />
                <TextField
                    fullWidth
                    // id="fullWidth"
                    id="year"
                    name="year"
                    value={values.year}
                    // onChange={(event) => setYear(event.target.value)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Year of Release"
                    variant="outlined"
                    error={errors.year && touched.year}
                    helperText= {errors.year && touched.year && errors.year } />
                <br />
               
                <br />
                <TextField
                    fullWidth
                    // id="fullWidth"
                    id="plot"
                    name="plot"
                    value={values.plot}
                    // onChange={(event) => setPlot(event.target.value)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Movie plot"
                    variant="outlined" 
                    error={errors.plot && touched.plot}
                    helperText= {errors.plot && touched.plot && errors.plot }/>
                    
                <br />
               
                <br />
                <TextField
                    fullWidth
                    // id="fullWidth"
                    id="posterUrl"
                    name="posterUrl"
                    value={values.posterUrl}
                    // onChange={(event) => setPoster(event.target.value)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Movie poster Url"
                    variant="outlined"
                    error={errors.posterUrl && touched.posterUrl}
                    helperText= {errors.posterUrl && touched.posterUrl && errors.posterUrl } />
                <br />
               
                <br />
            </Box>
            {/* <Button variant="contained" color="success" onClick={addmovie}>
                Add Movie
            </Button> */}
            <Button type="submit" variant="contained" color="success">Add Movie</Button>
            <br />
            <br />
            </form>
        </div>
    );
}
