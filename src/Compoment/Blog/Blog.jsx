import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import '../AllCSS/Component.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utility/localstorage';


const Blog = () => {
    const blog = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const blogs = blog.find(blogs => blogs.id == idInt);

console.log(blogs)
const { estate_title, segment_name, description, price, status, area, location, facilities, image } = blogs;

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('Add Properties Successfully....')
    }

    

    return (
        <div className='max-w-7xl m-auto'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="w-3/4 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{estate_title}</h1>
      <p className="py-2">{description}</p>
      <p className="py-2 font-bold text-2xl">{segment_name}</p>
      <p className=" font-bold mt-3 mb-3 text-2xl">{price}</p>


        <div className='flex justify-between items-center states'>
            <h1>{area}</h1>
            <div className='flex gap-2 mt-2 mb-2'>
            <h1 className='text-xl'><IoLocationSharp/></h1> 
            <h1>{location}</h1>
            </div>
        </div>
        <h1 className='text-2xl font-bold mb-3'>{status}</h1>
        <div className='mb-3'>
            <ul>
                <li>1. {facilities[0]}</li>
                <li>2. {facilities[1]}</li>
                <li>3. {facilities[2]}</li>
            </ul>
        </div>
      <Link to={'/'}> <button className='btn btn-primary mt-5'>Back Home Page</button></Link>
      <Link> <button onClick={handleApplyJob} className='btn btn-primary mt-5'>Add Properties</button></Link>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Blog;