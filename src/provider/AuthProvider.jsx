import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';



const AuthContext =createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)

     // State for theme (dark or light)
  const [isDarkMode, setIsDarkMode] = useState(false);

     //  new user
     const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

      //   login user
    const userlogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

     //   google signup
     const googleProvider = new GoogleAuthProvider();
     const googleLogin = () => {
       setLoading(true);
       return signInWithPopup(auth, googleProvider);
     };

     //   logout
    const logOut = () => {
        setLoading(true);
    
        signOut(auth);
         
      };

       //auth observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          // console.log('State captured',currentUser?.email)
          if(currentUser?.email){
            const user ={email:currentUser.email}
            axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
            .then(res=>{
              // console.log('login token', res.data)
              setLoading(false);
            })
          }
          else{
            axios.post('http://localhost:5000/logOut', {}, {withCredentials:true})
            .then(res=>{
              // console.log('logout', res.data)
              setLoading(false);
            })
          }
          
        });
        return () => {
          unsubscribe();
        };
      }, []);

      // theme management
      useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setIsDarkMode(savedTheme === 'dark');
        }
      }, []);

      // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

const authInfo = {
    createNewUser, user, setUser, loading, userlogin, googleLogin, logOut, isDarkMode,
    toggleTheme,
}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export  {AuthProvider, AuthContext};