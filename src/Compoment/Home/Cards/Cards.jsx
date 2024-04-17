import { useLoaderData } from "react-router-dom";
import CardWeb from "./CardWeb/CardWeb";
import '../../AllCSS/Component.css'
import 'animate.css';

const Cards = () => {

    const blogs = useLoaderData()
    console.log(blogs)

    return (
       <div>
        <div>
            <h1 className="animate__animated animate__flipInY text-center text-5xl text-red-700 font-bold mt-10">ESTATE</h1>
        </div>

        <div className='max-w-7xl m-auto cardsDetails' >
        
        {blogs.map(blog =>(<CardWeb key={blog.id} blog = {blog} ></CardWeb>))}
    </div>
       </div>
    );
};

export default Cards;