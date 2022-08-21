import React, { useState } from "react";
import {  Alert } from "react-bootstrap";
import Login from "./Login";
import './signup.scss';

const SignUp =() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword , setconfirmPassword] = useState("");

  const [passflag, setpassFlag] = useState(false);

  const [login, setLogin] = useState(false);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !confirmPassword) {
    
    }
    
    if (password !== confirmPassword) {

      setpassFlag(true);
      
    } 
    
    else {
      
      localStorage.setItem("VishalEmail", JSON.stringify(email));
      localStorage.setItem(
        "VishalPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <div className="outer">
 
        <div className="inner" >
          {" "}
          {!login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
            </div>
            <br />

              <div className="form-group">
                <label>Email</label>
              <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label>Password</label>
              <input
                  required
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <br />


              <div className="form-group">
                <label>Confirm Password</label>
              <input
                  required
                  type="password"
                  className="form-control"
                  placeholder="Re Enter password"
                  onChange={(event) => setconfirmPassword(event.target.value)}
              />
              {passflag && (
                <Alert color="primary" variant="danger">
                  confirm password are not same!
                </Alert>
              )}
              </div>
              <br />


            
              <div className="form-group">
                <label>Phone No.</label>
                <input
                  Required
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <br />
            


              <br />
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
             
            </form>
          ) : (
          <Login />
          )}
        </div>
    
    </div>
  );
}

export default SignUp;
