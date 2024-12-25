import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            
            <div>
                <img src="https://i.ibb.co.com/0fZW4hV/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg" alt="" />
            </div>
            <div>
                <Link to='/'><button className='btn bg-purple-600 text-white'>HOME</button></Link>
            </div>
        </div>
    );
};

export default Error;