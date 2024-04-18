import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth";

// Create context for authentication
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create GoogleAuthProvider here
    const googleProvider = new GoogleAuthProvider();

    // Create Github provider 
    const githubProvider = new GithubAuthProvider();

    // Function to create a new user with email and password
    const createUser = (email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, photoURL);
    };

    // Function to sign in user with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Function to sign in with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Function to sign in with github 
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Function to observe authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // Function to sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Value object to be provided by the context
    const authInfo = { user, createUser, signInUser, logOut, loading, signInWithGoogle, signInWithGithub };

    // Provide the authInfo value to the children components
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
