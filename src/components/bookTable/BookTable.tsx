import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { SearchTableForm } from "../searchTableForm/SearchTableForm";
import { BookTableForm } from "../bookTableForm/BookTableForm";
import { TableClass } from "../../models/TableClass";
import { BookingClass } from "../../models/BookingClass";
import BookTableTime from "./BookTableTime";

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
  });

  const [tableContainer, setTableContainer] = useState<TableClass>({
    restaurantId: "65ca1266c11c3c8be672e7c9",
    date: "",
    time: "",
    numberOfGuests: 1,
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: 0,
    },
  });

  const [toggleBooking, setToggleBooking] = useState("");
  const [tableFree19, setTableFree19] = useState(false);
  const [tableFree21, setTableFree21] = useState(false);
  const handleSearchTable = () => {
    const filterTablesDate = tablesData.filter(
      (table) => table.date === tableContainer.date
    );

    const filterTablesDateTime19 = filterTablesDate.filter(
      (table) => table.time === "19:00"
    );
    const filterTablesDateTime21 = filterTablesDate.filter(
      (table) => table.time === "21:00"
    );

    // Max antalet bord per tid
    filterTablesDateTime19.length < 15
      ? setTableFree19(true)
      : setTableFree19(false);
    filterTablesDateTime21.length < 15
      ? setTableFree21(true)
      : setTableFree21(false);

    setToggleBooking("openTime");
  };

  const handleBookTable = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://school-restaurant-api.azurewebsites.net/booking/create",
        tableContainer
      );
      setToggleBooking("2");
      alert("Bokningen lyckades");
    } catch (error) {
      alert("Något gick fel, försök igen");
    }
  };

  function handleOnClick(time: string) {
    setTableContainer({
      ...tableContainer,
      time: time,
    });
    setToggleBooking("openUserInfo");
  }

  function renderSwitch(param: string) {
    switch (param) {
      case "openTime":
        return (
          <BookTableTime
            handleOnClick={(time) => handleOnClick(time)}
            tableFree19={tableFree19}
            tableFree21={tableFree21}
          />
        );

      case "openUserInfo":
        return (
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
        );
      default:
        return (
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
        );
    }
  }

  return renderSwitch(toggleBooking);
};
