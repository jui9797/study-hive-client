import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import Lottie from 'lottie-react';
import reslootie from '../assets/lottie/Animation - 1735162077587.json'


const Register = () => {

    const navigate =useNavigate()
    const { createNewUser, setUser } = useContext(AuthContext)
    const location =useLocation()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const photo = form.photo.value.trim()
        const password = form.password.value.trim()
        const newUser = { name, email, photo, password }
        // console.log(newUser)

        // validation
        if (!isNaN(name)) {
            // Check if title is a number
            return Swal.fire({
                title: "Error",
                text: "Please enter a valid name!",
                icon: "error",
            });
          }

        if (!photo || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(photo)) {
            Swal.fire({
                title: "Error",
                text: "Please enter a valid photo URL!",
                icon: "error",
            });
            return;
        }

        const regexPass =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!regexPass.test(password)){
            Swal.fire({
                title: "Opps.....!",
                text: "invalid password",
                icon: "error"
              });
          return;
        }


        createNewUser(email, password)
            .then(result => {
                const user = result.user
            //    console.log(user)
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(() => {

                        setUser({ ...auth.currentUser, displayName: name, photoURL: photo })
                        Swal.fire({
                            title: "Congrates",
                            text: "Register successful",
                            icon: "success"
                          });
                          navigate(location?.state? location.state :'/')

                    })
                    .catch((err) => {
                        
                        Swal.fire({
                          title: 'Oops..!',
                          text: err.message,
                          icon: 'error',
                          confirmButtonText: 'OK',
                        });
                      });
            })
            .catch((error) => {

                const errorMessage = error.message;
                Swal.fire({
                    title: "Opps...!",
                    text: errorMessage,
                    icon: "error"
                  });
                
            });
    }

    return (
        <div className='rounded-lg'>
            <div className="hero  min-h-screen bg-[url('https://i.ibb.co.com/Gt4KQXP/pngtree-wooden-texture-login-form-enhancing-aesthetic-appeal-image-13918200.png')] my-10">
            <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                    <div className="text-center lg:text-left text-white  w-full ">
                        <h1 className="text-3xl lg:text-4xl font-bold">Register now!</h1>
                        <Lottie animationData={reslootie} style={{ width: '100%', height: '350px' }}></Lottie>
                        <p className='ml-2 my-2'>  Already register ? Please<Link to='/login' className='text-[#0AB99D] font-bold ml-2 italic text-xl'>Login</Link></p>
                    </div>
                    <div className="card bg-base-100 bg-opacity-50 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className='btn rounded-none   bg-gray-700 ml-2 text-white'>Register</button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;