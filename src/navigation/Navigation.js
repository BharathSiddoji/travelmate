import React from "react";
import { Link } from "react-router-dom";
import { BsList,BsX, BsXLg } from "react-icons/bs";
import "./navigation.css";
import Aside from "./Aside";
import { useState } from "react";
const Navigation = () => {
  const [btn,setBtn]= useState(false)
  const btnHandler=()=>{
    setBtn(btn=>!btn)
  }
  return (
   <>
    <nav className="nav_header">
      <div className="nav-container">
        <div className="logo">
          <img src="../assets/Logo.svg" alt="" />
        </div>
        <div className="nav_items">
          <ul className="nav_links">
            <Link to="/"  style={{textDecoration:"none",color:'black'}}>Home</Link>
            <Link to="/Tours"  style={{textDecoration:"none",color:'black'}}>Tours</Link>
            <Link to="/about"  style={{textDecoration:"none",color:'black'}}>About</Link>
            <Link to="/contact"  style={{textDecoration:"none",color:'black'}}>Contact</Link>
          </ul>
        </div>
      </div>
      <div className="nav_menu" onClick={btnHandler}>
        {btn?<BsX className="nav_menu close"/>:<BsList className="nav_menu"/>}
      
      </div>
      {btn?<Aside setBtn={()=>setBtn(btn=>!btn)}/>:null}
    </nav>
   </>
  );
};

export default Navigation;
