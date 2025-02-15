import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [Loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // Social media login start
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // Social media login end
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const GithubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const UpdateProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            console.log("Profile Updated")
          }).catch((error) => {
            console.log(error.code)
          });
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
              console.log("User is signed in", currentUser);
              
            } else {
              console.log("User is signed out");
            }
            setLoading(false)
          });
    
        return ()=> unSubscribe();
    },[Loading])
    
    const AuthInfo = {
        user,
        Loading,
        setLoading,
        createUser,
        LogInUser,
        GoogleLogIn,
        GithubLogIn,
        UpdateProfile,
        LogOut,

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;