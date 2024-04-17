import React, { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

//     if(loading)
//     {
//         return <div className='max-w-7xl m-auto'>
//             <div className=' my-auto text-center'>
//             <span className="loading loading-bars loading-xs"></span>
// <span className="loading loading-bars loading-sm"></span>
// <span className="loading loading-bars loading-md"></span>
// <span className="loading loading-bars loading-lg"></span>
//             </div>
//         </div>
//     }

    if(!user)
    {
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
    }


    return (

        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;





