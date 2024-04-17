import { IoLocationSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import '../../AllCSS/Component.css'
import 'animate.css';

// stat build here 

const Stat = () => {
    return (
        <div className='max-w-7xl m-auto bg-blue-900 rounded-lg text-white p-10 flex states'>
            <div className='first flex  mr-5 StatesPart '>
                <div className="text-4xl mr-3"><IoLocationSharp /></div>
                <div><span className="text-3xl font-extrabold">9</span><br /><span className="text-red-700 font-bold text-2xl">Property Locations</span></div>
            </div>


            <div className='first flex mr-5 StatesPart'>
                <div className="text-4xl mr-3"><IoPeopleSharp /></div>
                <div><span className="text-3xl font-extrabold">5</span><br /><span className="text-red-700 font-bold text-2xl">Professional Agents</span></div>
            </div>



            <div className='first flex mr-5 StatesPart'>
                <div className="text-4xl mr-3"><FaHome /></div>
                <div><span className="text-3xl font-extrabold">7</span><br /><span className="text-red-700 font-bold text-2xl">Property for Sell</span></div>
            </div>



            <div className='first flex mr-5 StatesPart'>
                <div className="text-4xl mr-3"><HiHomeModern /></div>
                <div><span className="text-3xl font-extrabold">2</span><br /><span className="text-red-700 font-bold text-2xl">Property for Rent</span></div>
            </div>

        </div>
    );
};

export default Stat;