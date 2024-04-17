import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import 'animate.css';

const LoginPage = () => {

  const {signInUser,googleLogin,githubLogin} = useContext(AuthContext)

  const navigate = useNavigate()
  const [emptyError,setEmptyError] = useState('')
  const [showPassword,setShowPassword] = useState(false)
  const location = useLocation()
  const from = location?.state || '/';

  const handleSocialLogin = socialProvider => {
    socialProvider()
    .then(result => {
      if(result.user)
      {
        navigate(from);
        toast.success('Login successful!');
      }
    })
  }
 


  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm();

  const onSubmit = (data) => {

    const {email,password} = data;

    signInUser(email,password)
    .then(result => {
      if(result.user)
      {
        navigate(from);
      }
    })
    
    .catch(error =>setEmptyError(error.message.split("/")[1]))
  };



    return (
        <div className="max-w-7xl m-auto">
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
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
      {emptyError && <span className='text-red-900 font-bold'><p>Email or Password doesn't match</p></span>}
         
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary animate__animated animate__bounce">Login</button>
        </div>

        

        <div>
          <Link to={'/signUp'}> <span >SignUp Here</span></Link>
        </div>
      </form>
      <div className="flex gap-3 mt-5 mb-5 px-7">
          <div>
            <button onClick={() =>handleSocialLogin(googleLogin)} className="btn btn-primary ">Google</button>
          </div>

          <div>
            <button onClick={() =>handleSocialLogin(githubLogin)} className="btn btn-primary ">Github</button>
          </div>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default LoginPage;