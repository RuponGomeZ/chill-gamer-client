import React, { createContext, use, useEffect, useState } from 'react';
import { auth } from './firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userinfo, setUserinfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const provider = new GoogleAuthProvider();

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                setUserinfo(null);
            })
    }

    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/users')
                .then(res => res.json())
                .then(data => setUserinfo(data))
                .then(() => setLoading(false))
                .catch(() => setUserinfo(null));
        } else {
            setUserinfo(null);
        }
    }, [user]);


    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    const createUser = (email, password, name, photoURL) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(result.user, { displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...result.user, displayName: name, photoURL: photoURL });
                        console.log(result.user);
                        setLoading(false);
                    })
            })
            .catch((error) => {
                setError(error.message);
            })

    }

    const loginWithEmailNameAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                console.log(user);
            })
            .catch((error) => {
                setError(error.message);
            })
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log('Auth state changed:', user);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const data = {
        user,
        logOut,
        userinfo,
        setUserinfo,
        googleLogin,
        loginWithEmailNameAndPassword,
        updateProfile,
        createUser,
        loading,
        setLoading,
        error,
        setError
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;