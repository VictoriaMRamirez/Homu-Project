import { useCallback, useContext, useState } from "react";
import Context from "../components/services/userContext";
import LoginAuthService from "../components/services/LoginAuthService";
import addFavService from "../components/services/FavsPost";

export default function useUser(){
    const {favs,jwt, setFavs, setJWT } = useContext(Context);

    const login = useCallback(({email, password}) => {
        LoginAuthService({email, password})
        .then (jwt => {
            window.localStorage.setItem("user", jwt);
            setJWT(jwt);    
        })
        .catch(err => {
            window.localStorage.removeItem("user");
            console.error(err);
        })
    },[setJWT]);

    const addFav = useCallback(({products, users}) => {
        addFavService({products, users})
        .then(setFavs)
        .catch(err => console.error(err));
        
    },[jwt, setFavs]);

    const logOut = useCallback (()=>{
        setJWT(null);
        localStorage.setItem("user",null);
    }, [setJWT])    

    

    return {
        addFav,
        favs,
        login,
        logOut
    }
}