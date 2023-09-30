import "../css/Hero.css";
import Image from "next/image";
import FoodImg from "../images/food.jpg";
import ButtonEx from "./ButtonEx";
const Hero = () => {
  return (
    <>
      <div className="hero_section">
        <Image src={FoodImg} alt="Hero.jpg" className="hero_image" />
        <div className="text-main">
          <div className="Hero_text_btn">
            <h1 className="text-h1">
              Uncover a treasure trove of gradient recipes on this website,
              infusing your culinary adventures with colorful inspiration.
            </h1>
            <div className="box-btn">
           
            <ButtonEx/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
