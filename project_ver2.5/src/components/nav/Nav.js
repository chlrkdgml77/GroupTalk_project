import React, {useState} from 'react'
import "./nav.css"
import ico1 from "../../img/ico/home.png";
import ico2 from "../../img/ico/user.png";
import ico3 from "../../img/ico/plus.png";
import ico4 from "../../img/ico/email.png";
import ico5 from "../../img/ico/set.png";

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href='#'><img src={ico1}></img></a>
      <a href='#about'><img src={ico2}></img></a>
      <a href='#exp'><img src={ico3}></img></a>
      <a href='#service'><img src={ico4}></img></a>
      <a href='#contact'><img src={ico5}></img></a>
    </nav>
  )
}

export default Nav