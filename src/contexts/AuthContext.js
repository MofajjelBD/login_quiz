import React, { Children, useContext, useEffect, useState } from "react";
import "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth, updateProfile } from "firebase/auth";
import { async } from "@firebase/util";

const AuthContext = React.createContext({ children });

export function useaAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);


    // singup function 
    async function singup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);


        // profile update 
        await updateProfile(auth.currentUser, { displayName: username }
        );

        const user = auth.currentUser;
        setCurrentUser({ ...user });
    }


    // login function 
    async function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout function 

    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }


    const value = {
        currentUser,
        singup,
        login,
        logout,

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}