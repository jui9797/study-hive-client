import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';



const AuthContext =createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)

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
          console.log(currentUser)
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);

const authInfo = {
    createNewUser, user, setUser, loading, userlogin, googleLogin, logOut
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