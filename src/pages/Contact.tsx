import { Header } from "../components/header/Header";
import ContactForm from "../contactForm/ContactForm";
import "../contactForm/ContactForm.scss";
import HeaderImage from '../images/contact_header.png'

export const Contact = () => {
  return (
    <>
    <Header title="Kontakta oss" imageUrl={HeaderImage}/>
    <main>
      <section className="sectionTop">
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            height: "2px",
            borderRadius: "20px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        ></div>
        <h2
          className="inder-regular"
          style={{ margin: "10px", textShadow: "0px 2px #D26500" }}
        >
          Lotus Lounge
        </h2>
        <h2 className="inder-regular" style={{ margin: "10px" }}>
          Tulegatan 10
        </h2>
        <h2 className="inder-regular" style={{ margin: "10px" }}>
          113 53, Stockholm
        </h2>
        <h2 className="inder-regular" style={{ margin: "10px" }}>
          info@indianlotus.se
        </h2>
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            height: "2px",
            borderRadius: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        ></div>
      </section>
      <section>
        <ContactForm />
      </section>
    </main>
    </>
  );
};
