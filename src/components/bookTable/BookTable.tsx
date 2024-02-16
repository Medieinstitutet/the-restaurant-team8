import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { SearchTableForm } from "../searchTableForm/SearchTableForm";
import { BookTableForm } from "../bookTableForm/BookTableForm";
import { TableClass } from "../../models/TableClass";
import { BookingClass } from "../../models/BookingClass";

export const BookTable = () => {
  const [tablesData, setTablesData] = useState<BookingClass[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65ca1266c11c3c8be672e7c9"
      )
      .then(function (response) {
        setTablesData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [numberOfGuests, setNumberOfGuests] = useState(1);
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [tableContainer, setTableContainer] = useState<TableClass>({
    restaurantId: "65ca1266c11c3c8be672e7c9",
    date: "",
    time: "15:00",
    numberOfGuests: 1,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: 0,
    },
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [toggleBooking, setToggleBooking] = useState(false);
  const handleSearchTable = () => {
    tablesData.length < 15
      ? (setToggleBooking(true), console.log("inte större än 15"))
      : (setToggleBooking(false), console.log("Större än 15"));
  };
  const handleBookTable = async (e: FormEvent) => {
    console.log(tableContainer);

    e.preventDefault();
    try {
      await axios.post(
        "https://school-restaurant-api.azurewebsites.net/booking/create",
        tableContainer
      );
      setBookingSuccess(true);
      alert("Bokningen lyckades");
    } catch (error) {
      alert("Något gick fel, försök igen");
    }
  };

  return (
    <>
      {!bookingSuccess && (
        <>
          <SearchTableForm
            handleSubmit={handleSearchTable}
            date={tableContainer.date}
            numberOfGuests={tableContainer.numberOfGuests}
            onNumberOfGuestsChange={(e) =>
              setTableContainer({
                ...tableContainer,
                numberOfGuests: parseInt(e.target.value),
              })
            }
            onDateChange={(e) =>
              setTableContainer({ ...tableContainer, date: e.target.value })
            }
          />
          {toggleBooking && (
            <BookTableForm
              onNameChange={(e) =>
                setTableContainer({
                  ...tableContainer,
                  customer: {
                    ...tableContainer.customer,
                    name: e.target.value,
                  },
                })
              }
              onLastNameChange={(e) =>
                setTableContainer({
                  ...tableContainer,
                  customer: {
                    ...tableContainer.customer,
                    lastname: e.target.value,
                  },
                })
              }
              onEmailChange={(e) =>
                setTableContainer({
                  ...tableContainer,
                  customer: {
                    ...tableContainer.customer,
                    email: e.target.value,
                  },
                })
              }
              onPhoneChange={(e) =>
                setTableContainer({
                  ...tableContainer,
                  customer: {
                    ...tableContainer.customer,
                    phone: parseInt(e.target.value),
                  },
                })
              }
              handleSubmit={handleBookTable}
            />
          )}
        </>
      )}
    </>
  );
};
