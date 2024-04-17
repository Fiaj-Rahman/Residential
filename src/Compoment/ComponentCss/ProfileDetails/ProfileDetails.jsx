import React, { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {

    const{user} = useContext(AuthContext)
console.log(user)
    return (
        <div className='max-w-7xl m-auto'>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50  m-auto">
	<img src={user.photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
    
	<div className="mt-6 mb-2">
		<div className='flex items-center'>
        <span className="block text-xl font-medium tracking-widest uppercase text-violet-400">{user.displayName}</span>
        <Link to={'/updateProfile'}><button className='btn btn-primary m-2'>edit</button></Link>
        </div>


		<div className='flex items-center'>
        <h2 className="text-sm font-semibold tracking-wide">{user.email}</h2>
        <Link to={'/updateProfile'}><button className='btn btn-accent m-2'>edit</button></Link>
        </div>
	</div>
	
</div>
        </div>
    );
};

export default ProfileDetails;