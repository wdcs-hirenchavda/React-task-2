import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

function Registration() {
  const navigate = useNavigate()

  const [submit, setSubmit] = useState();
  const [data, setData] = useState([]);
  const [pass, setPass] = useState();

  const submitHadler = async () => {
    const url = `https://reqres.in/api/register `;
    axios
      .post(url, {
        email: submit,
        password: pass,
      })
      .then((responce) => setData(responce.data.token));
    console.log("Registered", data);
    localStorage.setItem("register", data);
    if(data ===	'QpwL5tke4Pnpja7X4'){

       navigate('/login');
    }
  };
  const {
    register,
    formState: { errors },
  } = useForm()

  return (
    <div>
      {/* <form> */}

       <input {...register('email', { required: true,maxLength:6 })}
        type="email"
        id="users"
        onChange={(e) => setSubmit(e.target.value)}
        placeholder="Enter email" 
        />
        {errors.email && <p>email is required.</p>}
      <input {...register('password', { required: true ,maxLength:6})}
        type="password"
        id="pas"
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter password"
        />
        {errors.password && <p>password is required.</p>}
      <button onClick={() => submitHadler()}>Submit</button>
        {/* </form>  */}
        {/* <form onSubmit={handleSubmit(submitHadler)}>
    
      <input placeholder="enter email" onChange={(e) => setSubmit(e.target.value)} {...register('email', { required: true })} />
      {errors.email && <p>email is required.</p>}
      <input placeholder="enter password" onChange={(e) => setPass(e.target.value)} {...register('password', { required: true ,minLength:6})} />
      {errors.password && <p>Please enter password min 6 character.</p>}
      <input type="submit" />
    </form> */}
    </div>
  );
}

export default Registration;
