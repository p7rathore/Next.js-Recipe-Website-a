import "../css/Simpleracipe.css";
import Image from "next/image";
import Simple from "../images/sample.jpg";
const Simpleracipe = () => {
  return (
    <>
      <div className="Simple_racipe ">
        <div className="siumple-card">
          <div className="text-sample">
            <h2 className="name-text-samp">The Simply Recipes</h2>
            <p className="siample-para">
              Culinary Excellence: Learning from Simply Recipes - Embark on a
              culinary odyssey with insights from the masters at Simply Recipes.
              Our comprehensive guide dives deep into their rich repository of
              recipes, techniques, and tips. Discover how to elevate your
              kitchen game, from mastering essential cooking skills to creating
              unforgettable dishes. Well explore the science of flavor,
              demystify challenging recipes, and share stories from seasoned
              home cooks. Join us on a gastronomic adventure as we unlock the
              secrets behind Simply Recipes success, empowering you to create
              extraordinary meals that will delight your taste buds and impress
              your loved ones.
            </p>
          </div>

          <Image
            src={Simple}
            alt="Simple-racipe.jpg"
            className="simple-racipe-image"
          />
        </div>
      </div>
    </>
  );
};

export default Simpleracipe;
