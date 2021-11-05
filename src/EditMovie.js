// import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { updateStoredMovies } from "./App";
import * as yup from 'yup'; 
import { useFormik,  } from "formik";




export function EditMovie({
  movie, setMovies
}) {

  const history = useHistory();
  const { id } = useParams();
  const movies = movie.find(movies=>movies.id===id);
  const aboutValidationShema=yup.object({
    title: yup
    .string()
    .min(3, "Need Bigger name")
    .required("Cool name is in need"),
    // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched" ),

    plot:yup
    .string()
    .min(20, "Please provide longer plot detais")
    .max(500, "Please provide shorter plot detais")
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
  const {handleSubmit, handleChange, handleBlur, errors, touched}=
  useFormik({
  initialValues:{ 
      title: movies.title ,
      plot: movies.plot,
      posterUrl: movies.posterUrl ,
      year: movies.year,
      rating: movies.rating
  },
  validationSchema:aboutValidationShema,
  onSubmit:(values) => {
    console.log("onSubmit", values);
    fetch("https://6173de78110a74001722318d.mockapi.io/movies/"+id, {
                      method:"PUT",
                      body:JSON.stringify(values),
                      headers:{"content-type":"application/json"},
                  })
                  .then(data=>data.json())
                  .then(data=>history.push("/movielist"))
      }
})






//   let [title, setTitle] = useState();
//   let [plot, setPlot] = useState();
//   let [poster, setPoster] = useState();
//   let [year, setYear] = useState();
//   let [rating, setRating] = useState();
// const updateEdited=()=>{
//   const editedMovie={
//     title: title,
//     plot: plot,
//     posterUrl: poster,
//     year: year,
//     rating:rating,
// };
// fetch("https://6173de78110a74001722318d.mockapi.io/movies/"+id, {
//                 method:"PUT",
//                 body:JSON.stringify(editedMovie),
//                 headers:{"content-type":"application/json"},
//             })
//             .then(data=>data.json())
//             .then(data=>history.push("/movielist"))
// }






  // function crtEdit(data){
  //   if(data!==undefined){
  //    return movies.data=data;
  //   }
  // }
  //working good
  // const updateEdited = () => {

    // console.log(crtEdit(title));
    // crtEdit(plot);
    // crtEdit(poster);
    // crtEdit(year);
    // console.log(title, plot, year)


      //working good
    // if(title!==undefined ){
    //   movies.title=title;
    //    }
    //    if(plot!==undefined ){
    //     movies.plot=plot;
    //      }
    //      if(poster!==undefined ){
    //       movies.poster=poster;
    //        }
    //        if(year!==undefined ){
    //         movies.year=year;
    //          }


    //  movies.title = title;
    // movies.plot = plot;
    // movies.poster = poster;
    // movies.year = year;
    // setMovies([...movie]);
    // updateStoredMovies([...movie]);
    // history.push("/movielist");


 

  return (
    <div >
      <form onSubmit={handleSubmit}>
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
            // onChange={(event) => setTitle(event.target.value)}
            // id="outlined"
            id="title"
            name="title"
            label="Title"
            // defaultValue={movies.title} 
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={movies.title} 
            error={errors.title && touched.title}
            helperText= {errors.title && touched.title && errors.title }/>

            <TextField
            // onChange={(event) => setRating(event.target.value)}
            // id="outlined"
            id="rating"
            name="rating"
            label="⭐Rating"
            // defaultValue={movies.rating} 
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={movies.rating}
            error={errors.rating && touched.rating}
            helperText= {errors.rating && touched.rating && errors.rating } />

          <TextField
            // onChange={(event) => setYear(event.target.value)}
            // id="outlined"
            id="year"
            name="year"
            label="Year"
            // defaultValue={movies.year}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={movies.year}
            error={errors.year && touched.year}
            helperText= {errors.year && touched.year && errors.year } />

          <TextField
            // onChange={(event) => setPlot(event.target.value)}
            // id="outlined"
            id="plot"
            name="plot"
            label="plot"
            // defaultValue={movies.plot}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={movies.plot}
            error={errors.plot && touched.plot}
            helperText= {errors.plot && touched.plot && errors.plot } />

          <TextField
            // onChange={(event) => setPoster(event.target.value)}
            // id="outlined"
            id="posterUrl"
            name="posterUrl"
            label="Poster Url"
            // defaultValue={movies.posterUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={movies.posterUrl} 
            error={errors.posterUrl && touched.posterUrl}
            helperText= {errors.posterUrl && touched.posterUrl && errors.posterUrl }/>

        </div>
      </Box>
      {/* <Button onClick={updateEdited} variant="contained" color="success">
        Submit
      </Button> */}
      <Button type="submit" variant="contained" color="success" >Submit</Button>
      </form>
    </div>
  );
}
