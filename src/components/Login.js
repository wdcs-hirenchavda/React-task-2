import axios from "axios";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const token = localStorage.getItem("register");
  console.log("token", token);

  const submit = () => {
    const url = `https://reqres.in/api/login `;
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((responce) => setUser(responce.data.token));
    console.log("login Token", user);
  };
  if (token === user) {
    navigate("/users");
  }
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm()
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter  email here" 
      ></input>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter  Password here"
      ></input>
      <button
        onClick={() => {
          submit();
        }}
      >
        Submit
      </button> 
      {/* <form onSubmit={handleSubmit(submit)}>
    
    <input placeholder="enter email" onChange={(e) => setEmail(e.target.value)} {...register('email', { required: true })} />
    {errors.email && <p>email is required.</p>}
    <input placeholder="enter password" onChange={(e) => setPassword(e.target.value)} {...register('password', { required: true ,minLength:6})} />
    {errors.password && <p>Please enter password min 6 character.</p>}
    <input type="submit" />
  </form> */}
    </div>
  );
}

export default Login;
