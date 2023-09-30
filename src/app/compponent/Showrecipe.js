"use client";
import { useEffect, useState } from "react";
import FilterSearchRec from "../compponent/FilterSearchRec";
import "../css/Showrecipe.css";
import Lodding from "./Lodding";
import Image from "next/image";
import Link from "next/link";
const Showrecipe = () => {
  const [maildata, setMaildata] = useState([""]);
  const [lodding, setLodding] = useState(true);
  const [search, setSearch] = useState("Arrabiata");
  const [error, setError] = useState("");
  const [url, setUrl] = useState(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=s`
  );
  // alert(alfabatemail)
  useEffect(() => {
    setLodding(true);
    fetch(url)
      .then((res) => res.json())
      .then((maildata) => {
        // console.log(maildata);
        if (maildata.meals === null) {
          setError("Recipe not found !");
        } else {
          setError("");
        }
        setMaildata(maildata.meals);
        setLodding(false);
      });
  }, [url]);

  /* .......... Alsabate search ............ */
  const setIndex = (alfa) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alfa}`);
  };

  /* ....................... search items............... */
  const searchmails = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  return (
    <>
      <FilterSearchRec
        alfaindex={(alfa) => setIndex(alfa)}
        searchmails={searchmails}
        searchupdate={setSearch}
        error={error}
      />
      <div className="show-recipe">
        {lodding ? (
          <>
            <Lodding />
          </>
        ) : (
          maildata?.map((res) => {
            return (
              <>
                <Link className="a" href={`/Showalldata/${res.idMeal}`}>
                  <div className="card-recipe">
                    <Image
                      src={res.strMealThumb}
                      width={350}
                      height={200}
                      alt="Food.jpg"
                      className="food-racipe.jpg"
                    />
                    <p className="catogry-food">{res.strCategory}</p>
                    <h3 className="food-name">{res.strMeal}</h3>
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

export default Showrecipe;
