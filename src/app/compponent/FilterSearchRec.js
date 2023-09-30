"use client";
import { useState } from "react";
import "../css/FilterSearchRec.css";

const FilterSearchRec = ({ alfaindex, searchmails, searchupdate, error }) => {
  const ALFABATE = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "V",
    "W",
    "Y",
  ];

  const setButton = (res) => {
    alfaindex(res);
  };

  const updatesearch = (e) => {
    searchupdate(e.target.value);
  };
  const searchitems = () => {
    searchmails();
    document.querySelector(".search-input").value = "";
  };
  return (
    <>
      <div className="alfabox">
        <div className="alfabate">
          {ALFABATE.map((res) => {
            return (
              <>
                <div className="alfa" onClick={() => setButton(res)}>
                  <p className="alfa-text">{res}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* ................... search ............... */}
      <div className="search-box">
        <div className="search">
          <input
            className="search-input"
            type="search"
            placeholder="Search Foods..."
            onChange={(e) => updatesearch(e)}
          />
          <button className="ser-btn" onClick={() => searchitems()}>
            Find
          </button>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          color: "red",
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {error}
      </p>
    </>
  );
};

export default FilterSearchRec;
