import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';


import { registerUser, loginUser } from '../utilities/services';

const Login = ({ touched, errors, initialValues, values, ...rest}) => {
  const [ onLogin, setOnLogin ] = useState(true);
  const [ whatForm, setWhatForm ] = useState('login');

  const toggleRegistration = () => {
    if(whatForm === 'login') {
      setWhatForm('register');
    } else {
      setWhatForm('login');
    }
    setOnLogin(!onLogin);
  }

  useEffect( () => {
    if(initialValues) {
      values.what = whatForm;
      setNestedObjectValues(values);
    }
  }, [whatForm])

  return(
    <main className="login">
      <div className="form-container">
        <div className="login-toggle-container">
          <div className={onLogin ? 'active' : 'current'} onClick={!onLogin ? toggleRegistration : null}>Login</div>
          <div className={!onLogin ? 'active' : 'current'} onClick={onLogin ? toggleRegistration : null}>Registration</div>
        </div>
        {onLogin ?
          (
            <Form className="login">
              <Field type="text" name="username" placeholder="username" />
              <div className="error">
                {touched.username && errors.username && <p>{errors.username}</p> }
              </div>
              <Field type="text" name="password" placeholder="password" />
              <div className="error">
                {touched.password && errors.password && <p>{errors.password}</p> }
              </div>
              <Field type="hidden" name="what" value="login" />
              <button type="submit">Login</button>
            </Form>
          ) : (
            <Form className="register">
              <Field type="text" name="username" placeholder="username" />
              <div className="error">
                {touched.username && errors.username && <p>{errors.username}</p> }
              </div>
              <Field type="text" name="password" placeholder="password" />
              <div className="error">
                {touched.password && errors.password && <p>{errors.password}</p> }
              </div>
              <Field type="hidden" name="what" value="register" />
              <button type="submit">Register</button>
            </Form>
          )
        }
      </div>
    </main>
  )
}



export default withFormik({
  mapPropsToValues({ username, password, what }) {
    return {
      username: username || "",
      password: password || "",
      what:     what     || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, "Username must be at least 2 characters long")
      .max(15, "Username cannot be longer than 15 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be longer then 6 characters")
      .max(20, "Password cannot be longer then 20 charactesr")
      .required("Password is required")
  }),
  handleSubmit( credentials, formikBag ) {
    console.log(credentials);
    if(credentials.what === 'login') {
      loginUser({username: credentials.username, password: credentials.password}, formikBag);
    } else {
      registerUser({username: credentials.username, password: credentials.password}, formikBag);
    }
  }
})(Login);