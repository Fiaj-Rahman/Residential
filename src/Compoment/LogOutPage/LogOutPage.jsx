


import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import 'animate.css';

const LogOutPage = () => {

  
  const {createUser,updateUserProfile} = useContext(AuthContext)
  const [emptyError,setEmptyError] = useState('')
  const [showPassword,setShowPassword] = useState(false)

  const navigate = useNavigate()

  const location = useLocation()
  const from = location?.state || '/';



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const{email,password,photo,fullName} = data;

    if (password.length < 6) {
      setEmptyError('Password must be at least 6 characters long');
      return; // Exit the function if password is too short
  }

  if (!/[A-Z]/.test(password)) {
    setEmptyError('Password must contain an uppercase letter');
    return;
  }

  if (!/[a-z]/.test(password)) {
    setEmptyError('Password must contain an uppercase letter');
    return;
  }


  setEmptyError('')



    createUser(email,password)

    

    .then(result => {
      updateUserProfile(fullName,photo)
      
      .then(()=>{
      
        navigate(from);
        toast.success('SignUp successful!');
      
      })
      
      
    })

    .catch(error =>setEmptyError(error.message.split("/")[1]))
  };




  return (
    <div className='max-w-7xl'>
      <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("fullName", { required: true })} type="text" placeholder="name" className="input input-bordered"  />
           {/* errors will return when field validation fails  */}
      {errors.fullName && <span className='text-red-900 font-bold'>This field is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input {...register("photo", { required: true })} type="text" placeholder="Photo url" className="input input-bordered"  />

          {/* errors will return when field validation fails  */}
      {errors.photo && <span className='text-red-900 font-bold'>This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />

          {/* errors will return when field validation fails  */}
      {errors.email && <span className='text-red-900 font-bold'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>


          <div className='relative'>
          <input {...register("password", { required: true })} 
          type={showPassword ? "text" : "password"} 
          placeholder="password" 
          className="input input-bordered"  />
          <span className='absolute top-1/3  text-xl m-1' onClick={() => setShowPassword(!showPassword)}>{
            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
          }</span>
          </div>



           {/* errors will return when field validation fails  */}
      {errors.password && <span className='text-red-900 font-bold'>This field is required</span>}
      {emptyError && <span className='text-red-900 font-bold'>{emptyError}</span>}
        </div>
        <div className="form-control mt-6">
          <button className="animate__animated animate__zoomInRight btn btn-primary">SignUp</button>
        </div>

        <div><Link to={'/login'}>Login Here</Link></div>
      </form>
      
    </div>
  </div>
</div>
    </div>
  );
};

export default LogOutPage;