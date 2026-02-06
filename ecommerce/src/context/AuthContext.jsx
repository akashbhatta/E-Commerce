import { createContext, useState } from 'react'



export const AuthContext = createContext();

    export function AuthProvider({children}){
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [email, setEmail]= useState('');
        const [password, setPassword] = useState('');
        const [fullName, setFullName] = useState('');
        
        
        function login(){
            setIsLoggedIn(true);
        }
        function logout(){
            setIsLoggedIn(false);
        }

    
    return <AuthContext.Provider value={{isLoggedIn, login, logout, email,password,setEmail,setPassword, fullName, setFullName}}>{children}</AuthContext.Provider>
    } 