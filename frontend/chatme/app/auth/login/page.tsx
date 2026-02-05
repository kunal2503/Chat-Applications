"use client"

import React, { ChangeEvent, FormEvent } from "react";
import Navigate from "next/navigation";

const Login = () =>{
    const [userData, setUserData] = React.useState({
        email : "",
        password : ""
    });
    const navigate = Navigate;

    const handleChanges = (e : ChangeEvent<HTMLInputElement>)=>{
        setUserData({...userData , [e.target.id] : e.target.value})
    };

    const handleLogin = async(e : FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/api/user/profile",{
                method : "GET",
                credentials : "include",
                 headers :{
               "Content-Type" : "application/json"
            },
            
        })
        const data = await response.json();
        console.log(data);
        
        
        } catch(error){
            console.log(error);
        }
    }

    return (
       <div className="flex items-center justify-center flex-col border border-gray-300 px-6 py-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="flex items-center justify-center flex-col mt-4 space-y-4">
            <div className="flex flex-col ">
            <label htmlFor="email"  className="font-light">Email</label>
            <input type="email" id="email" value={userData.email} onChange={handleChanges} placeholder="Enter a Email" className="border  border-gray-800 outline-none px-6 py-2 focus:border-2" />
            </div>
            <div className="flex flex-col ">
            <label htmlFor="password" className="font-light">Password</label>
            <input type="password" id="password"  value={userData.password} onChange={handleChanges} placeholder="Enter a Password" className="border border-gray-800 outline-none px-6 py-2 focus:border-2" />
            </div>
            <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 focus:border-2 focus:border-blue-300 px-6 py-2 font-bold rounded-sm">Login</button>
        </form>
       </div>
    )
}

export default Login;