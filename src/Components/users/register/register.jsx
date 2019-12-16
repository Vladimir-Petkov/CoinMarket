import React from 'react';
import useForm from 'react-hook-form';
import "./styles.css";
import userController from '../controllers/userController';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => userController.postRegister(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required ref={register} ></input>

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required ref={register}></input>

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="passwordRepeat" required ref={register}></input>

        <p>By creating an account you agree to our <a href="/terms">Terms and Privacy</a>.</p>
        <button type="submit" className="registerbtn">Register</button>
      </div>

      <div className="container signin">
        <p>Already have an account? <a href="/login">Login</a>.</p>
      </div>
    </form>
  );
}