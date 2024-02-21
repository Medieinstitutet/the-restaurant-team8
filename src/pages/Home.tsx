import { Header } from "../components/header/Header";
import HeaderImage from "../../src/images/home_headerimg.png";
import { TextSection } from "../components/textSection/TextSection";
import RestaurantImage from "../images/restaurant.png";
import { OpeningHours } from "../components/openingHours/OpeningHours";

export const Home = () => {
  return (
    <>
      <Header title="Välkommen till Lotus Lounge" imageUrl={HeaderImage} />
  
        <TextSection
          headline="Smaker från Indien, hjärtat i Stockholm"
          text="Upptäck en värld av autentiska,
          kryddstarka rätter i en atmosfär där tradition möter modernitet.
          Hos oss blir varje måltid ett minne att bära med sig.
          Förena smak, kultur och gemenskap vid vårt bord.
          Upplev det bästa av Indien, en tugga i taget."
        />
        <div className="textAndImage">
          <div className="imgContainer">
          <img src={RestaurantImage} alt="restaurang" />
          </div>
        <OpeningHours/>
      </div>

    </>
  );
};
