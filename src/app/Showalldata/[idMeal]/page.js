"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/css/allrecipe.css";
import Food from "@/app/images/youtube.jpg";
import YoutubeLogo from "@/app/images/youtubelogo.png";

const Page = ({ params }) => {
  const [thumbimage,setThumbimage] = useState([""])
  const [lodding, setLodding] = useState(true);
  const [alldata, setAlldata] = useState([""]);
  const id = params.idMeal;

  useEffect(() => {
    setLodding(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((alldata) => {
        // console.log(alldata.meals[0]);
        setAlldata(alldata.meals[0]);
        setThumbimage(alldata.meals[0].strYoutube);
        setLodding(false);
      });
  }, [id]);

  return (
    <>
      <div className="thumb">
        <div className="thumb-image">
          <Image src={Food} alt="food.jpg" className="thumbnal" />
        </div>
      </div>
      {lodding ? (
        <>
          <h1 style={{
            textAlign:'center',
            marginTop:'20px'
          }}>Lodding....</h1>
        </>
      ) : (
        <>
          <div className="top-tetx">
            <h1 className="food-name1">{alldata.strMeal}</h1>
          </div>

          <div className="para">
            <p className="para-tetx">{alldata.strInstructions}</p>
          </div>

          <div className="youtube">
            <a href={alldata.strYoutube} className="a">
              <Image
                src={YoutubeLogo}
                alt="toutubelogo.png"
                className="youtubrlogo"
              />
            </a>
          </div>

          <div className="recipe">
            <h1 className="name-re">Recipe Chart</h1>
            <table border={1} className="tablee">
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
              <tr>
                <td>{alldata.strIngredient1}</td>
                <td>{alldata.strMeasure1}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient2}</td>
                <td>{alldata.strMeasure2}</td>
              </tr>

              <tr>
                <td>{alldata.strIngredient3}</td>
                <td>{alldata.strMeasure3}</td>
              </tr>

              <tr>
                <td>{alldata.strIngredient4}</td>
                <td>{alldata.strMeasure4}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient5}</td>
                <td>{alldata.strMeasure5}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient6}</td>
                <td>{alldata.strMeasure6}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient7}</td>
                <td>{alldata.strMeasure7}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient8}</td>
                <td>{alldata.strMeasure8}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient9}</td>
                <td>{alldata.strMeasure9}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient10}</td>
                <td>{alldata.strMeasure10}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient11}</td>
                <td>{alldata.strMeasure11}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient12}</td>
                <td>{alldata.strMeasure12}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient13}</td>
                <td>{alldata.strMeasure13}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient14}</td>
                <td>{alldata.strMeasure14}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient15}</td>
                <td>{alldata.strMeasure15}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient16}</td>
                <td>{alldata.strMeasure16}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient17}</td>
                <td>{alldata.strMeasure17}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient18}</td>
                <td>{alldata.strMeasure18}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient19}</td>
                <td>{alldata.strMeasure19}</td>
              </tr>
              <tr>
                <td>{alldata.strIngredient20}</td>
                <td>{alldata.strMeasure20}</td>
              </tr>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
