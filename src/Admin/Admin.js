import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./admin.css"

const Admin = () => {
  return (<>
    <div className='admin'>
      <div className="menu">
        <h2>Navnath Traders</h2>
        <div className="line"></div>
        <li><a href="/"><NavLink to={"addproduct"}>Add Product</NavLink></a></li>
        <li><a href="/"><NavLink to={"viewproducts"}>Product</NavLink></a></li>
        <li><a href="/"><NavLink to={"viewcontact"}>Contacts</NavLink></a></li>
      </div>
      <div className="menu-space"></div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
  )
}

export default Admin