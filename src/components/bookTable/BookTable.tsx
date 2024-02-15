import { FormEvent, useState } from "react";
import axios from "axios";
import { SearchTableForm } from "../searchTableForm/SearchTableForm";
import { BookTableForm } from "../bookTableForm/BookTableForm";
import { TimeSlot } from '../timeSlot/TimeSlot';
import { TimeSlotsContainer } from "../timeSlotsContainer/TimeSlotsContainer";

export const BookTable = () => {
  const restaurantId = "65ca1266c11c3c8be672e7c9"
  const sittings = ["18:00", "21:00"]

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const handleSearchTable = async (e: FormEvent) => {
   
}

const handleBookTable = async (e: FormEvent) => {
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
      alert('Bokningen lyckades')
  }
  catch (error) {
      alert('Något gick fel, försök igen')
  }
  console.log(numberOfGuests)
}

  return (
    <>
    {!bookingSuccess && (
      <>
    <SearchTableForm
     handleSubmit={handleSearchTable}
     date={date}
     numberOfGuests={numberOfGuests}
     onNumberOfGuestsChange={(e) => setNumberOfGuests(+e.target.value)}
     onDateChange={(e) => setDate(e.target.value)}
     />
      
      <TimeSlotsContainer
      sittings={sittings}
      setTime={setTime}
      />
     <BookTableForm
     name={name}
     lastName={lastName}
     email={email}
     phone={phone}
     onNameChange={(e) => setName(e.target.value)}
     onLastNameChange={(e) => setLastName(e.target.value)}
     onEmailChange={(e) => setEmail(e.target.value)}
     onPhoneChange={(e) => setPhone(e.target.value)}
     handleSubmit= {handleBookTable}
     />
     </>
     )}
     </>
     );
};
