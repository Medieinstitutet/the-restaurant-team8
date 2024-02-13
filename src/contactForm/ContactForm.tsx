import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form>
      <h2
        className="inder-regular"
        style={{
          margin: "10px",
          textShadow: "0px 2px #D26500",
          textAlign: "center",
        }}
      >
        Synpunkter
      </h2>
      <label className="inknut-antiqua-light">Ämne</label>
      <select name="Ämne" id="ämne" required>
        <option value="">-- Välj --</option>
        <option value="service">Service</option>
        <option value="mat">Mat</option>
        <option value="personal">Personal</option>
        <option value="webbsida">Webbsida</option>
      </select>
      <label className="inknut-antiqua-light">Förnamn</label>
      <input name="Förnamn" type="text" required />
      <label className="inknut-antiqua-light">Efternamn</label>
      <input name="Efternamn" type="text" />
      <label className="inknut-antiqua-light">Telefonnummer</label>
      <input name="Telefonnummer" type="number" />
      <label className="inknut-antiqua-light">E-post</label>
      <input name="Mail" type="email" required />
      <label className="inknut-antiqua-light">Meddelande</label>
      <textarea name="Meddelande" id="" cols={30} rows={10} required></textarea>
      <br />
      <input name="PolicyCheck" type="checkbox" id="PolicyCheck" required />
      <label
        htmlFor="PolicyCheck"
        className="inknut-antiqua-light"
        style={{ display: "inline", marginLeft: "10px", letterSpacing: "0" }}
      >
        Jag samtycker att mina uppgifter används
      </label>
      <br />
      <input type="submit" value={"Skicka ->"} id="submitBtn" />
    </form>
  );
};

export default ContactForm;
