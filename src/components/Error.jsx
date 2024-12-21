import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <h2 className='text-5xl font-bold'>Route Not Found</h2>
            <div>
                <Link to='/'><button className='btn'>HOME</button></Link>
            </div>
        </div>
    );
};

export default Error;