import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const handelclick=()=>{
    let userdata={
      email,
      password,
    }
    
    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>{
      let tokenfromrequres= res.data.token
      console.log(tokenfromrequres)
      localStorage.setItem("Token",tokenfromrequres)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div style={{color:"#F4538A"}} className='btn'>
       <h1>LOGIN</h1>
       <label htmlFor="">email :- </label>
       <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='enter email' />
        <br />
        <label htmlFor="">password :- </label> 
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='enter password' />
        <br /><br />
        <button onClick={handelclick}>LOGIN</button>
        
        <button onClick={handelclick}>LOGOUT</button>
      
    </div>
  )
}

export default Login
