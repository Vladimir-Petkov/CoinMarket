import React from 'react';
import useForm from 'react-hook-form';
import "./styles.css";
import userController from '../controllers/userController';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => userController.postLogin(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="container">
        <label htmlFor="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required ref={register}></input>

        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required ref={register}></input>

        <button type="submit">Login</button>
      </div>

      <div className="container signin">
        <p>Don't have an account? <a href="/register">Register</a>.</p>
        <p className="psw">Forgot <a href="/repeatePassword">password?</a></p>
      </div>
    </form>
  );
}