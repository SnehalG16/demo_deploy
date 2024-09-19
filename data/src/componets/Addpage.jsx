import axios from 'axios'
import React, { useEffect, useState } from 'react'


const initalvalue={
  image:"",
  title:"",
  description:"",
  Category:"",
  price:"",
}
const Addpage =()=>{
  const [formdata,setformdata]=useState(initalvalue)
  const{title,image,Category,description,price}=formdata

  const handlechange=(e)=>{
    const {name,value}=e.target
     setformdata({...formdata,[name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
     axios.post("https://demo-backend-1-tefk.onrender.com/Product",formdata).then((res)=>{
      console.log(res)
      alert("DATA ADDED")
     })
     .catch((err)=>{console.log(err)})
  }

  return(
    <div style={{color:"#F4538A"}}>
       <h1> ADD PAGE</h1>
        
       <div>
        <form onSubmit={(e)=>handlesubmit(e)}>
        <label htmlFor="">image :- </label>
          <input name="image" value={image}  onChange={handlechange} type="text" placeholder="Image" /> <br />
          <label htmlFor="">title :- </label>
          <input name="title" value={title} type="text"  onChange={handlechange} placeholder="title" /> <br />
          <label htmlFor="">Category :- </label>
          <select name="Category"  onChange={handlechange} value={Category}>
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
          <br />
          <label htmlFor="">price :- </label>
          <input name="price" value={price}  onChange={handlechange} type="text" placeholder="Price" /> <br />
          <label htmlFor="">description :- </label>
          <input name="description" value={description} type="text"  onChange={handlechange} placeholder="description" /> <br />
          <br />
          <input type="submit" style={{height:"40px",fontSize:"20px"}} />
        </form>
      </div>
    </div>
  )
}
export default Addpage