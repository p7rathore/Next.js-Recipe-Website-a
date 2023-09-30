import "../css/Footer.css";
import Image from "next/image";
import Logo from "../images/logo.png"
import BgIm from "../images/bg.png"
const Footer = () => {
  return (
    <>
      <div className="footer">
            <div className="logo-email">
                  <div className="logo">
                      <div className="logo-box">
                          <Image src={Logo} alt="logo.png" className="footer-logo"/>
                           <h1 className="name-footer-title">Recipe</h1>
                      </div>
                  </div>
                  <div className="email">
                       <h2 className="ready">Ready to cook?</h2>
                      <div className="email-box">
                             <input className="input-email" type="email" placeholder="Enter email"/>
                              <button className="inpute-btn">Send</button>
                      </div>
                  </div>
            </div>
                   {/* .......................... */}
                   {/* <div className="bg-box">

                   </div> */}
                <Image src={BgIm} alt="bg.png" className="bg-image"/>
         
      </div>
    </>
  );
};

export default Footer;
