import { Header } from "../components/header/Header";
import HeaderImage from "../../src/images/home_headerimg.png";
import { TextSection } from "../components/textSection/TextSection";
import RestaurantImage from "../images/restaurant.png";
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

      <div style={{width: "80vw", margin: "auto"}}>
        <img style= {{width: "100%"}} src={RestaurantImage} alt="restaurang" />
      </div>

    </>
  );
};
