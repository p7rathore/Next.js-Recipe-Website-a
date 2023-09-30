"use client";
import "../css/latestracipe.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lodding from "./Lodding";
import Link from "next/link";
const LatestRacipe = () => {
  const [racdata, setRacdata] = useState([""]);
  const [lodding, setLodding] = useState(true);
  useEffect(() => {
    setLodding(true);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setRacdata(data.meals);
        setLodding(false);
      });
  }, []);
  return (
    <>
      <h1 className="latest-racipe-title">Latest Recipes</h1>

      <div className="cointener-card">
        {lodding ? (
          <>
            <Lodding />
          </>
        ) : (
          racdata.map((res) => {
            // console.log(res)
            return (
              <>
                <Link className="a" href={`/Showalldata/${res.idMeal}`}>
                  <div className="card">
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

export default LatestRacipe;
