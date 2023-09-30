"use client";
import "../css/Navbaar.css";
import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import Menu from "@/app/images/menu.png"
const Navbaar = () => {


  const menubar =()=> {
    let menu = document.querySelector(".ul-box");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    } 
  }
 

  return (
    <>
      <div className="nav_baar">
        <Link href="/" className="a">
          <div className="logo-name">
            <Image src={Logo} alt="logo.png" className="logo_image" />
            <h1 className="name-web">Recipes</h1>
          </div>
        </Link>
        <div className="ul-box" >
          <ul className="ul">
            <li className="li">
              <Link href="/" className="a">
                Home
              </Link>
            </li>
            <li className="li">
              <Link href="/Recipe" className="a">
                Recipes
              </Link>
            </li>
            <li className="li">
              <Link href="/Contact" className="a">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hame_burger">
          <Image src={Menu} alt="menu.png" className="menu" onClick={()=>menubar()}/>
          {/* <i className="fa-solid fa-bars">Y</i> */}
        </div>
      </div>
    </>
  );
};

export default Navbaar;
