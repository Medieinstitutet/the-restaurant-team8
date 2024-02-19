import { ChangeEvent, FormEvent } from "react";
import "./BookingForm.scss";

interface IBookTableFormProps {
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
