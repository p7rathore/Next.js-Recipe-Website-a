import "../css/RecHero.css";
import Image from "next/image";
import RecIm from "../images/food.jpg";
const ResHero = () => {
  return (
    <>
      <div className=" rec-hero">
        <div className="rec-image-box">
          <Image src={RecIm} alt="rechero.jpg" className="rec-image" />
        </div>
      </div>
    </>
  );
};

export default ResHero;
