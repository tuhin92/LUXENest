import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password, photoURL) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, photoURL);
    }

    // sign in user 
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observe auth state change 
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false);
            console.log('observing current user', currentUser);
        });

        return () =>{
            unSubscribe();
        }
    }, [])

    // sign out 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = { user, createUser, signInUser, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}