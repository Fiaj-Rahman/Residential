import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebaseConfig';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)



    //Create User

    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // Updated user
    const updateUserProfile = (name,image) =>{
     return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }


    //Sign In User

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google Login
    const googleLogin = () => {
        setLoading(true)
         return signInWithPopup(auth, googleProvider)
    }

     //Github Login
     const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubprovider)
   }


   //Log Out

   const logout = () =>{
    
    setUser(null)
    signOut(auth)
   }

    //observer
    useEffect(()=>{
      const unsubcribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setLoading(false)
            } 
          });
          return () => unsubcribe();
    },[])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;