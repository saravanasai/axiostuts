import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const NavBar = ({heading}) => {
 

  const [Auth,setAuth]=useState()
  
  useEffect(()=>{
      setAuth(localStorage.getItem('token'))
  },[Auth])
  
   const handleLogout=()=>{
      localStorage.removeItem('token')
      window.location.href="/"
   }

      
    return ( 
    <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#131214'}}>
      <Link className="navbar-brand" to="/"><h3>SS Bank</h3></Link>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {(Auth)?<li className="nav-item">
            <p className="nav-link" onClick={handleLogout} >Logout</p>
          </li>:<li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>}  
        </ul>
        <div className="">
        <h2 className="text-white" >{heading}</h2>
      </div>
      </div>   
    </nav>
     );
}
 
export default NavBar;
