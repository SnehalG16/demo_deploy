import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiSearchEyeLine } from "react-icons/ri";

const Product = () => {
  const [data, setdata] = useState([])
  const [categoryoption, setcategoryoption] = useState(null)
  const [order, setorder] = useState(null)
  const [page, setpage] = useState(1)
  const [search,setsearch]=useState("")
  console.log(categoryoption)
  const getdatafunction = () => {
    axios.get("https://demo-backend-1-tefk.onrender.com/Product", {
      params:
      {
         _page: page,
        _limit: 2,
        category: categoryoption,
        _sort: "price",
        _order: order,
        q:search
      }
    })

      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))
  }
  const handeldelete = (id) => {

    axios.delete(`https://demo-backend-1-tefk.onrender.com/Product/${id}`)
      .then((res) => {
        alert("DELETE")
        getdatafunction()
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getdatafunction()
  }, [page, categoryoption, order,search])
  return (
    <div  style={{color:"#F4538A"}}>
      <h1>Product</h1>
      <hr />
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{margin:"40px"}}>
          <select name="" id="" onChange={(e) => setcategoryoption(e.target.value)} style={{color:"#F7418F"}}>
            <option value="">Select</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
          <div className='search' style={{margin:"35px"}}>
            <label htmlFor=""><RiSearchEyeLine  style={{fontSize:"25px"}}/></label>
            <input type="text" placeholder='search'onChange={(e)=>setsearch(e.target.value)}  />

          </div>
        <div className='btn'> 
          <button onClick={() => setorder("asc")}>LOW TO HIGH</button>
          <button onClick={() => setorder("desc")}>HIGH TO LOW</button>
        </div>
      </div>
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.map((el) => (
          <div key={el.id} style={{ boxShadow: "pink 5px 5px 5px", margin: "10px 20px" }} >
            <h3>Title :- {el.title}</h3>
            <h3>Price :- {el.price}</h3>
            <h3>{el.category}</h3>
            <Link to={`/singlepage/${el.id}`}>
              <img src={el.image} alt="" style={{ height: "150px", width: "150px" }} />
            </Link>
            <br /><br />
            <button style={{ height: "50px", width: "100px", fontSize: "15px" }}><Link to={`/edit/${el.id}`}>EDIT</Link></button>
            <button style={{ height: "50px", width: "100px", fontSize: "15px", margin: "0 10px" }} onClick={() => handeldelete(el.id)}>DELETE</button>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }} className='btn'>
        <button disabled={page==1} onClick={() => setpage(page - 1)}>prev</button>
        <span style={{margin:" 30px 20px"}}>{page}</span>
        <button disabled={page==page} onClick={() => setpage(page + 1)}>next</button>
      </div>
    </div>

  )
}

export default Product 