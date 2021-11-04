import React from "react";
import { useFormik,  } from "formik";
import * as yup from 'yup'; 

export function About() {
  // const validateAboutForm = (values) => {
  //   console.log("validateAboutForm", values);
  //   const errors={};
  //   if(values.email.length<5){
  //     errors.email="Please provide valid email address"
  //   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
  //     errors.email="Invalid email address";
  //   }
  //   if(values.password.length<8){
  //     errors.password="Please provide longer password"
  //   } else if(values.password.length>12){
  //     errors.password="Please provide shorter password"
  //   }
  //   console.log(errors);
  //   return errors;
  // };
  // const aboutValidationShema=yup.object({
  //   email: yup
  //   .string()
  //   .min(5, "Need Bigger email")
  //   .required("Please give email")
  //   .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched" ),

  //   password:yup
  //   .string()
  //   .min(8, "Please provide longer password")
  //   .max(12, "Please provide shorter password")
  // });
  // const formik=
  const {handleSubmit, values, handleChange, handleBlur, errors, touched}=
    useFormik({
    initialValues:{ email: "pradeep", password: "123456" },
    // validate:validateAboutForm,
    // validationSchema:aboutValidationShema,
    validationSchema:yup.object({
      email: yup
      .string()
      .min(5, "Need Bigger email")
      .required("Please give email")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched" ),

      password:yup
      .string()
      .min(8, "Please provide longer password")
      .max(12, "Please provide shorter password")
    }),
    onSubmit:(values) => {
      console.log("onSubmit", values);
    }
  })

  return (
    <div>
      {/* <Formik
        
      > */}
        {/* {(formik) => {
          return ( */}
            {/* <form onSubmit={formik.handleSubmit}> */}
            <form onSubmit={handleSubmit}>
              <input
              id="email"
              name="email"
                type="email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              {/* {formik.errors.email && formik.touched.email && formik.errors.email } */}
              {errors.email && touched.email && errors.email }
              <br/>
              <input
              id="password"
              name="password"
                type="password"
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          {/* );
        }} */}
      {/* </Formik> */}
    </div>
  );
}
