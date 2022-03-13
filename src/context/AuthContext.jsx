import React,{Children,useState} from "react";
import axios from "axios";


//Create Context
//Provide Context
//Usecontext
//consume=to display the UI details

const AuthContext = React.createContext()

const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth]= useState(false);
    const [token,setToken]=useState("")

    const handleLogin=(email,password)=>{
        axios({
            method:"post",            
            url:"https://reqres.in/api/login",
            data:{
                email,
                password
            }
        }).then(res=>{
            setIsAuth(true)
            setToken(res.token)
        }).catch(err=>console.log(err))

    }

    const value = {isAuth,handleLogin,token}


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {AuthContext,AuthContextProvider}