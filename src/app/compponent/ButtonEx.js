"use client";
import Link from "next/link";
const ButtonEx = () => {
  return (
    <div>
      <Link href="/Recipe" className="a">
        <button className="btn">Explore more Recipes </button>
      </Link>
    </div>
  );
};

export default ButtonEx;
