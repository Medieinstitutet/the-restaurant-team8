import { ChangeEvent, FormEvent } from "react";
import "./BookingForm.scss";

interface IBookTableFormProps {
    name: string,
    lastname: string,
    email: string,
    phone: string,
    onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onLastNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const BookTableForm = (props: IBookTableFormProps) => {

    return <>
<form className="bookingForm" onSubmit={props.handleSubmit}>
    <h2>Vem?</h2>
    <input type="text"
    value={props.name}
    onChange={props.onNameChange}
    placeholder="Förnamn"/>
    <input type="text"
    value={props.lastname}
    onChange={props.onLastNameChange}
    placeholder="Efternamn"/>
    <input type="text"
    value={props.email}
    onChange={props.onEmailChange}
    placeholder="Email"/>
    <input type="text"
    value={props.phone}
    onChange={props.onPhoneChange}
    placeholder="Telefonnr"/>
    <div>
        <button className="orange-btn" type="submit">Boka</button>
        <button className="red-btn">Avbryt</button>
    </div>
</form>
</>
}

