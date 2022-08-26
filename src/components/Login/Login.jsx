import React from 'react'
import { Formik, Form } from 'formik'
import TextField from '../Register/TextField'
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is Required'),

    password: Yup.string()
      .required('Password is Required'),
  })

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',

      }}
      validationSchema={validate}

      onSubmit={values => {
        const data = JSON.parse(localStorage.getItem('user'));

        if (data.email == values.email && data.password == values.password) {
          alert('Login successful')
          navigate('/profile')
        } else {
          alert('Invalid credentials..!')
        }

      }}
    >
      {formik => (
        <div className="container bg-white text-dark mt-3 ">
          <div className='cardSignup'>
            <div>

              <h1 className='my-4 font-weight-bold-display-4'>Sign In

              </h1>

              <Form>

                <TextField label='Email' name='email' type='email' />
                <TextField label='Password' name='password' type='password' />

                <button className="btn btn-dark mt-3" type="submit">Login</button>

              </Form>

            </div>
          </div>
        </div>
      )}


    </Formik>
  )
}

export default Login