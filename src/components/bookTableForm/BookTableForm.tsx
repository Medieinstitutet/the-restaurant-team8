import { ChangeEvent, FormEvent } from "react";
import "./BookingForm.scss";

interface IBookTableFormProps {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLastNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const BookTableForm = (props: IBookTableFormProps) => {
  return (
    <>
      <form className="bookingForm" onSubmit={props.handleSubmit}>
        <h2>Vem?</h2>
        <input
          required
          type="text"
          onChange={props.onNameChange}
          placeholder="Förnamn"
        />
        <input
          required
          type="text"
          onChange={props.onLastNameChange}
          placeholder="Efternamn"
        />
        <input
          required
          type="email"
          onChange={props.onEmailChange}
          placeholder="Email"
        />
        <input
          required
          type="number"
          onChange={props.onPhoneChange}
          placeholder="Telefonnr"
        />

    <label htmlFor="consent">Genom att klicka i denna ruta godkänner du våra användningsvillkor och GDPR</label>
        <input  required type="checkbox" name="consent" id="consent" />
        <div>
          <button className="orange-btn" type="submit">
            Boka
          </button>
          <button
            onClick={() => {
              location.reload();
            }}
            className="red-btn"
          >
            Avbryt
          </button>
        </div>
      </form>
    </>
  );
};
