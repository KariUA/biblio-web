import React, { createContext, useContext, useState , useEffect} from 'react';
import { GoogleAuthProvider,
        signInWithRedirect,
         signOut,
         onAuthStateChanged } from "firebase/auth";

import {auth} from '../api/firabase.config';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => { // Este efecto se ejecuta solo una vez, cuando el componente se monta 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            //setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
    };

    const logout = async () => {
        await signOut(auth);
    };

    const value = {
        user,
        signInWithGoogle,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}


