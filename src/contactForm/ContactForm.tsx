import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form>
      <h2>Synpunkter</h2>
      <h3>Ämne</h3>
      <input name="Ämne" type="text" />
      <h3>Förnamn</h3>
      <input name="Förnamn" type="text" />
      <h3>Efternamn</h3>
      <input name="Efternamn" type="text" />
      <h3>Telefonnummer</h3>
      <input name="Telefonnummer" type="number" />
      <h3>E-post</h3>
      <input name="Mail" type="email" />
      <h3>Meddelande</h3>
      <textarea name="Meddelande" id="" cols={30} rows={10}></textarea> <br />
      <input name="PolicyCheck" type="checkbox" />
      <label htmlFor="PolicyCheck">
        Jag samtycker att mina uppgifter används
      </label>
    </form>
  );
};

export default ContactForm;
