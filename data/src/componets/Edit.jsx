import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const Edit =()=>{
    const {id}=useParams()
    const initalvalue={
      image:"",
      title:"",
      description:"",
      Category:"",
      price:"",
    }
  const [formdata,setformdata]=useState(initalvalue)

  const{title,image,Category,description,price}=formdata

  const handelchange=(e)=>{
    const {name,value}=e.target
     setformdata({...formdata,[name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
     axios.put(`https://demo-backend-1-tefk.onrender.com/Product/${id}`,formdata).then((res)=>{
      console.log(formdata)
      alert("DATA UPDATE")
     })
     .catch((err)=>{console.log(err)})
  }
  const getdatafunction=()=>{
    axios.get(`http://localhost:3000/Product/${id}`)
    .then((res)=>{
      
        setformdata(res.data)
        })
        .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    getdatafunction()
},[])

  return(
    <div style={{color:"#F4538A"}}>
       <h1>EDIT</h1>
       <div>
        <form onSubmit={(e)=>handlesubmit(e)}>
          <label htmlFor="">image :-</label>
          <input name="image" value={image} type="text" onChange={(e)=>handelchange(e)} placeholder="Image" /> <br /><br />
          <label htmlFor="">title :-</label>
          <input name="title" value={title}type="text" placeholder="title" onChange={(e)=>handelchange(e)} /> <br /><br />
          <label htmlFor="">Category :-</label>
          <select name="Category" value={Category} onChange={(e)=>handelchange(e)}>
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select><br /><br />
          <label htmlFor="">price :-</label>
          <input name="price" value={price} type="text" placeholder="Price" onChange={(e)=>handelchange(e)}/> 
          <br /><br />
          <label htmlFor="">description :-</label>
          <input name="description" value={description} type="text" placeholder="description" onChange={(e)=>handelchange(e)}/> <br /><br />
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}
export default Edit