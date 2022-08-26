import React from 'react'
import { useNavigate } from "react-router-dom";
import './profile.scss';

const Profile = () => {

  const data = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();


  const submitHandler = () => {
    alert('Logout Successful..');
    navigate('/')
  }

  return (

    <div className='main'>
      <div className="cardProfile">

        <h1>{data.name}</h1><br />
        <p className="title">{data.email}</p>
        <p>{data.phone}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <button className="btn btn-dark mt-3" type="submit" onClick={submitHandler}>Logout</button>

      </div>
    </div>
  );
}

export default Profile