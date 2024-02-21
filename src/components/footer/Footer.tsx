import "./Footer.scss";
import Logo from "../../images/logo.png";
import InstagramIcon from "../../images/instagram_icon.png";
import FacebookIcon from "../../images/facebook_icon.png";
import XIcon from "../../images/x_icon.png";

export const Footer = () => {
  return (
    <footer>
      <div className="infoContainer col">
        <p>Tulegatan 10</p>
        <p>113 53, Stockholm</p>
        <p>info@indianlotus.se</p>
      </div>

      <div id="footerLogoContainer">
        <img src={Logo} alt="logotyp" />
      </div>

      <div className="iconsWrapper col">
        <div className="iconContainer">
          <img src={InstagramIcon} alt="instagram-ikon" />
        </div>
        <div className="iconContainer">
          <img src={FacebookIcon} alt="facebook-ikon" />
        </div>
        <div className="iconContainer">
          <img src={XIcon} alt="x-ikon" />
        </div>
      </div>
    </footer>
  );
};
