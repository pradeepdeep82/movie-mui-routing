import React from "react";
import { useFormik, Formik } from "formik";

export function About() {
  const validateAboutForm = (values) => {
    console.log("validateAboutForm", values);
    const errors={};
    if(values.email.length<5){
      errors.email="Please provide valid email address"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errors.email="Invalid email address";
    }
    if(values.password.length<8){
      errors.password="Please provide longer password"
    } else if(values.password.length>12){
      errors.password="Please provide shorter password"
    }
    console.log(errors);
    return errors;
  };
  const formik=useFormik({
    initialValues:{ email: "pradeep", password: "123456" },
    validate:validateAboutForm,
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
            <form onSubmit={formik.handleSubmit}>
              <input
              id="email"
              name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.email && formik.touched.email && formik.errors.email }
              <br/>
              <input
              id="password"
              name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
