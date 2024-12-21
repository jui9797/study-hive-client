import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Register = () => {

    const navigate =useNavigate()
    const { createNewUser, setUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const newUser = { name, email, photo, password }
        console.log(newUser)

        // const regexPass =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        // if(!regexPass.test(password)){
        //     Swal.fire({
        //         title: "Opps.....!",
        //         text: "invalid password",
        //         icon: "error"
        //       });
        //   return;
        // }


        createNewUser(email, password)
            .then(result => {
                const user = result.user
               console.log(user)
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(() => {

                        setUser({ ...auth.currentUser, displayName: name, photoURL: photo })
                        Swal.fire({
                            title: "Congrates",
                            text: "Register successful",
                            icon: "success"
                          });
                          navigate('/')

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
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                        Join us today and unlock a world of possibilities! Create your account in just a few steps to start your journey with us. Stay connected, explore new opportunities, and enjoy exclusive features designed just for you.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-500 text-white">Register</button>
                            </div>
                        </form>
                        <p className='ml-2 my-2'>  Already register ? Please<Link to='/login' className='text-pink-600 font-bold ml-2'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;