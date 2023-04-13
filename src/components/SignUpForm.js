import { useState } from "react";
import { useFormik, Form, Field, ErrorMessage, Formik } from "formik";
import { object, string, number, date, InferType, ref } from "yup";
import Input from "../common/Input";
// import * as yup from "yup"
//yup.object({...})  yup.string()

const savedData = {
  name: "maryam",
  email: "maryamsalamat47@gmail.com",
  password: "Mssl03@l",
  passwordConfirm: "Mssl03@l",
  gender: "1",
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  gender: "",
};

const validationSchema = object({
  name: string().required("name is required"),
  email: string().email("Invalid email format").required("email is required"),
  password: string()
    .required("password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: string()
    .required("passwordConfirm is required")
    .oneOf([ref("password"), null], "password must match"),
  gender: string().required("gender is required"),
});
const SignUpForm = () => {
  const [formData, setFormData] = useState(null);
  // const onSubmit = (values) => {};
  // const formik = useFormik({
  //   initialValues: formData || initialValues,
  //   onSubmit,
  //   validationSchema,
  //   validateOnMount: true,
  //   enableReinitialize: true,
  // });

  return (
    //1.
    // <form onSubmit={formik.handleSubmit}>
    //   <div className="formController">
    //     <label>Name</label>
    //     <input {...formik.getFieldProps("name")} name="name" type="text" />
    //     {formik.errors.name && formik.touched.name && (
    //       <span className="error">{formik.errors.name}</span>
    //     )}
    //   </div>
    //   <div className="formController">
    //     <label>Email</label>
    //     <input {...formik.getFieldProps("email")} name="email" type="text" />
    //     {formik.errors.email && formik.touched.email && (
    //       <span className="error">{formik.errors.email}</span>
    //     )}
    //   </div>
    //   <div className="formController">
    //     <label>Password</label>
    //     <input
    //       {...formik.getFieldProps("password")}
    //       name="password"
    //       type="password"
    //     />
    //     {formik.errors.password && formik.touched.password && (
    //       <span className="error">{formik.errors.password}</span>
    //     )}
    //   </div>
    //   <div className="formController">
    //     <label>Password Confirm</label>
    //     <input
    //       {...formik.getFieldProps("passwordConfirm")}
    //       name="passwordConfirm"
    //       type="password"
    //     />
    //     {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
    //       <span className="error">{formik.errors.passwordConfirm}</span>
    //     )}
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="gender"
    //       id="0"
    //       value="0"
    //       onChange={formik.handleChange}
    //       // checked={formik.values.gender === 0}
    //     />
    //     <label htmlFor="0">Male</label>
    //     <input
    //       type="radio"
    //       name="gender"
    //       id="1"
    //       value="1"
    //       onChange={formik.handleChange}
    //       // checked={formik.values.gender === 1}
    //     />
    //     <label htmlFor="1">Female</label>
    //     {formik.errors.gender && formik.touched.gender && (
    //       <span className="error">{formik.errors.gender}</span>
    //     )}
    //   </div>
    //   <button className="submitBtn" onClick={() => setFormData(savedData)}>
    //     Load data
    //   </button>
    //   <button className="submitBtn" type="submit" disabled={!formik.isValid}>
    //     submit
    //   </button>
    // </form>

    //2.width formik components
    <Formik
      initialValues={formData || initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      validateOnMount={true}
      enableReinitialize={true}
    >
      {(formik) => {
        return (
          <Form>
            <Input name="name" formik={formik} label="Name" />
            <Input name="email" formik={formik} label="Email" type="email" />
            <Input
              name="password"
              formik={formik}
              label="Password"
              type="password"
            />
            <Input
              name="passwordConfirm"
              formik={formik}
              label="Password Confirm"
              type="password"
            />

            <div>
              <Field type="radio" name="gender" id="0" value="0" />
              <label htmlFor="0">Male</label>
              <Field type="radio" name="gender" id="1" value="1" />
              <label htmlFor="1">Female</label>
              {formik.errors.gender && formik.touched.gender && (
                <ErrorMessage
                  name="gender"
                  component="span"
                  className="error"
                />
              )}
            </div>
            <button
              className="submitBtn"
              onClick={() => setFormData(savedData)}
            >
              Load data
            </button>
            <button
              className="submitBtn"
              type="submit"
              disabled={!formik.isValid}
            >
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
