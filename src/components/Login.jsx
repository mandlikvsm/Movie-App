import React, { useState } from "react";
import Home from "./Home";
import './signup.scss';

const  Login = () =>  {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
    
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
    
    } else {
      setHome(!home);
      
    }
  }

  return (
    <div className="outer">

      <div className="inner">
      {home ? (

        
<form onSubmit={handleLogin}>
  <h3>LogIn</h3>
  <div className="form-group">
    <label>Email</label>
    <input
      type="email"
      className="form-control"
      placeholder="Enter email"
      onChange={(event) => setEmaillog(event.target.value)}
    />
  </div>
  <br />

  <div className="form-group">
    <label>Password</label>
    <input
      type="password"
      className="form-control"
      placeholder="Enter password"
      onChange={(event) => setPasswordlog(event.target.value)}
    />
  </div>
  <br />

  <button type="submit" className="btn btn-dark btn-lg btn-block">
    Login
  </button>

 
</form>
) : (
<Home />
)}
      </div>
     
    </div>
  );
}

export default Login;