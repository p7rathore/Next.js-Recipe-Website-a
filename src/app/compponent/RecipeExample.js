"use client";
import { useEffect, useState } from "react";
import "../css/RecipeExample.css";
import Image from "next/image";
import Lodding from "./Lodding";
import Link from "next/link";
const RecipeExample = () => {
  const [maildata, setMaildata] = useState([""]);
  const [lodding, setLodding] = useState(true);
  useEffect(() => {
    setLodding(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=k`)
      .then((res) => res.json())
      .then((maildata) => {
        // console.log(maildata.meals);
        setMaildata(maildata.meals);
        setLodding(false);
      });
  }, []);
  return (
    <>
      <h1 className="example-foods"> Popular Recipes</h1>
      <div className="recipe-exaples">
        {lodding ? (
          <>
            <Lodding />
          </>
        ) : (
          maildata.map((res) => {
            return (
              <>
                <Link className="a" href={`/Showalldata/${res.idMeal}`}>
                  <div
                    className="example-card"
                  
                  >
                    <Image
                      src={res.strMealThumb}
                      alt="racipe-image.jpg"
                      className="latest-racipe-image"
                      width={350}
                      height={300}
                    />
                    <p className="catogry">{res.strCategory}</p>
                    <h3 className="name-racipe-name">{res.strMeal}</h3>
                  </div>
                </Link>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default RecipeExample;
