import "./page.module.css";
import Hero from "./compponent/Hero";
import LatestRacipe from "./compponent/latestRacipe";
import Simpleracipe from "./compponent/Simpleracipe";
import RecipeExample from "./compponent/RecipeExample";
import Footer from "./compponent/Footer";
export default function Home() {
  return (
    <>
      {/* <h1>Main page </h1> */}
      <Hero />
      <LatestRacipe />
      <Simpleracipe/>
      <RecipeExample/>
      <Footer/>
    
    </>
  );
}
