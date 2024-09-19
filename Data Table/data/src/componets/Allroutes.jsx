import React from 'react'
import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Addpage from './Addpage'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'
import Privatepage from './Privatepage'
import Dec from './Dec'
import Edit from './Edit'


const Allroutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Product" element={<Privatepage> <Product /> </ Privatepage >} />
         <Route path="/Addpage" element={<Addpage />} />
         <Route path="/Singlepage/:id" element={<Dec />} />
         <Route path="/edit/:id" element={<Edit />} />
         <Route path="/login" element={<Login />} />
         
         <Route path="*" element={"page not found "} /> 
         
      </Routes>
    </div>
  )
}

export default Allroutes
