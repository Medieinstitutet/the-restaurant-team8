import { ChangeEvent, FormEvent } from "react";

interface IBookTableFormProps {
    name: string,
    lastName: string,
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
<form onSubmit={props.handleSubmit}>
    <input type="text"
    value={props.name}
    onChange={props.onNameChange}
    placeholder="Förnamn"/>
    <input type="text"
    value={props.lastName}
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
    <button type="submit"></button>
</form>
</>
}

