import React, { createContext, use, useEffect, useState } from 'react';
import { auth } from './firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

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
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged Out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(null);
                setUserinfo(null);
            })
    }

    useEffect(() => {
        if (user) {
            fetch('https://game-review-server-site.vercel.app/users')
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
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Account created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })
            .catch((error) => {
                console.log(error);

                setError(error.message);
            })

    }

    const loginWithEmailNameAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        title: "Logged in Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
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