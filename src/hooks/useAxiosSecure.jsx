import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';



const axoisInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOut} =useContext(AuthContext)
    const navigate =useNavigate()

useEffect(()=>{
    axoisInstance.interceptors.response.use(
        response=>{
            return response
        },
        error=>{
            console.log('error caught in intercepter' ,'error')
            if(error.status === 401 || error.status === 403){
                // console.log('need to logout user')
                logOut()
                .then(()=>{
                    // console.log('logged out user')
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }
            return Promise.reject(error)
        }
    )
},[logOut, navigate])

    return axoisInstance
};

export default useAxiosSecure;