"use client"
import React from "react";


export default function Register (){
   const [userData, setUserData] = React.useState({
      username : "",
      email : "",
      password : ""
   })

   const handleChanges = (e : React.ChangeEvent<HTMLInputElement>) =>{
      setUserData({
         ...userData,
         [e.target.id] : e.target.value
      })
   }

   const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
      try{
         e.preventDefault();
         const response = await fetch("http://localhost:5000/api/auth/v1/register",{
            method : "POST",
            headers :{
               "Content-Type" : "application/json"
            },
            body : JSON.stringify(userData)
         })
         const data = await response.json();
         console.log(data+"Registration successful");
      } catch(error){
         console.error(error)
      }
   }

   return(
      <div className="flex items-center justify-center flex-col border border-gray-300 px-6 py-4">
        <h1 className="text-2xl font-bold">Create new account</h1>
        <form className="flex items-center justify-center flex-col mt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col ">
            <label htmlFor="username" className="font-light">Username</label>
            <input type="text" id="username" value={userData.username} onChange={handleChanges} placeholder="Enter a Username" className="border  border-gray-800 outline-none px-6 py-2 focus:border-2" />
            </div>
            <div className="flex flex-col ">
            <label htmlFor="email" className="font-light">Email</label>
            <input type="email" id="email" value={userData.email} onChange={handleChanges} placeholder="Enter a Email" className="border  border-gray-800 outline-none px-6 py-2 focus:border-2" />
            </div>
            <div className="flex flex-col ">
            <label htmlFor="password" className="font-light">Password</label>
            <input type="password" id="password" value={userData.password} onChange={handleChanges} placeholder="Enter a Password" className="border border-gray-800 outline-none px-6 py-2 focus:border-2" />
            </div>
            <button  className="bg-blue-500 hover:bg-blue-600 focus:border-2 focus:border-blue-300 px-6 py-2 font-bold rounded-sm">Register</button>
        </form>
       </div>
   )
}