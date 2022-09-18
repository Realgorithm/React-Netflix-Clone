/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import firebase from "./firebase.prod";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return <img src="./images/misc/loading.gif" alt="loading" style={{ position: "absolute", top: "20%", width: "400px" }} />;
    }
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
};
