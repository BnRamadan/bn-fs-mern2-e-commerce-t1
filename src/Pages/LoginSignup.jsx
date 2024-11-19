//  ! 🔥 💪🏻 Bn Ramadan fullstack MERN project 2 ( E-commerce fullstack app )
//  ! " The end of this project is the completing of future successes and creativity , Just strive, be patient, commit and keep going. "
//  ! 🔥 💪🏻 Always forward ! 💪🏻 🔥
import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign UP</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign Up</button>
        <p className="loginsignup-login">
          Already have an account? <span>Log In</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
