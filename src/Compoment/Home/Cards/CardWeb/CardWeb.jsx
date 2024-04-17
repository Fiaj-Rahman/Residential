import React from 'react';
import { ImPrevious } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";

const CardWeb = ({ blog }) => {
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = blog;
    return (
        <div className='mt-10 max-w-7xl m-auto'>

            <div >
            <Link to={`/blog/${id}`}>
<div data-aos="fade-up-right" data-aos-duration="1000" className="card bg-base-100 h-96 mr-5 shadow-xl">
<figure><img src={image} className='w-full' alt="Shoes" /></figure>
<div className="card-body">
  <h2 className="card-title">{estate_title}</h2>
  <p className='font-bold'>{price}</p>
  <div className='flex'>
  <p>{area}</p>
  <p className='font-bold text-xl'>{status}</p>
  </div>
  
  <div className='flex gap-2 mt-2 mb-2'>
  <h1 className='text-xl'><IoLocationSharp /></h1> 
  <h1>{location}</h1>
  </div>

  <div className="card-actions justify-start">
    <button className="btn btn-primary">View Property</button>
  </div>
</div>
</div>
</Link>
            </div>

            
        </div>
    );
};

export default CardWeb;
