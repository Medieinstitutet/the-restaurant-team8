import { FormEvent, useState } from "react";
import axios from "axios";

export const BookTable = () => {
    const restaurantId = "65ca1266c11c3c8be672e7c9"

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
    

        await axios.post('https://school-restaurant-api.azurewebsites.net/booking/create', {
            restaurantId: restaurantId,
            date,
            time,
            numberOfGuests,
            customer: {
              name:name,
              lastname: lastName,
              email: email,
              phone: phone
            }
        });

        setBookingSuccess(true);
    }

    catch (error) {
        alert('Något gick fel, försök igen')
    }

    console.log()
}

  return (
    <>
      <h2>Boka bord</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="datum (yyyy-mm-dd)"
        />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="tid (18:00 eller 21:00)"
        />
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(+e.target.value)}
          placeholder="datum (yyyy-mm-dd)"
        />
        <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Förnamn"/>
            <input type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Efternamn"/>
            <input type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"/>
            <input type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefonnr"/>

            <button type="submit"></button>
      </form>
    </>
  );
};
