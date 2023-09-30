import "../css/Contacts.css"
import Image from "next/image"
import ImageFood from "../images/contactImage.jpg"
const Contact = () => {
  return (
    <>
     <div className="contact-cointener">
            <div className="contact-items">
                  
                  <div className="items">
                      <div className="all-items">
                         <input className="First-name" type="text" placeholder="first name"/>
                         <input className="Last-name" type="text" placeholder="Last name"/>
                         <input className="email" type="email" placeholder="Enter Email"/>
                         <input className="message" type="text" placeholder="type your message"/>
                         <button className="submite">Submite</button>
                      </div>
                  </div>

                  <div className="images">
                      <Image src={ImageFood} alt="food.jpg" className="contact-image"/>
                  </div>

            </div>
     </div>
    </>
  )
}

export default Contact
