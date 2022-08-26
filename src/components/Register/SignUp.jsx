import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField'
import * as Yup from 'yup';
import 'yup-phone';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();

  const validate = Yup.object({

    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Name is Required'),

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is Required')
      .test('Uniques Email', 'User Already Exists .Please go to Login', (value) => {
        const data = JSON.parse(localStorage.getItem('user'));
        if (data) {
          if (value == data.email) {

            return false;
          }
          return true;
        }
        else return true;
      }),


    phone: Yup.string()
      .phone()
      .required(),

    password: Yup.string()
      .min(6, 'password must be at least 6 characters')
      .max(15, 'password not higher than 15 characters')
      .required('Password is Required'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('confirm password is Required'),

  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}

      onSubmit={values => {

        localStorage.setItem('user', JSON.stringify(values));
        alert('Registration successful');
        navigate('/login')


      }}

    >
      {formik => (

        <div className="container bg-white text-dark mt-3 ">
          <div className='cardSignup'>
          <div>

            <h1 className='my-4 font-weight-bold-display-4'>Sign Up

            </h1>

            <Form>

              <TextField label='Name' name='name' type='text' />
              <TextField label='Email' name='email' type='email' />
              <TextField label='Phone' name='phone' type='number' />
              <TextField label='Password' name='password' type='password' />
              <TextField label='Confirm Password' name='confirmPassword' type='password' />

              <button className="btn btn-dark mt-3" type="submit">Register</button>{'       '}
              <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </Form>



          </div>
        </div>
        </div>
  )
}


    </Formik >
  )
}

export default SignUp