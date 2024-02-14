import axios from "axios";
import { useEffect, useState } from "react";
import { BookingClass } from "../models/BookingClass";

export const Admin = () => {
  const [data, setData] = useState<BookingClass[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65ca1266c11c3c8be672e7c9"
      )
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return data.map((booking) => {
    return (
      <div key={booking._id}>
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            height: "2px",
            borderRadius: "20px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          {" "}
        </div>
        <label htmlFor="customerId">KundId</label>
        <input
          id="customerId"
          disabled={true}
          value={booking.customerId}
          name="customerId"
        />

        <label htmlFor="_id">BokningsID:</label>
        <input id="_id" disabled={true} value={booking._id} name="_id" />

        <label htmlFor="restaurantId">RestaurangID:</label>
        <input
          id="restaurantId"
          disabled={true}
          value={booking.restaurantId}
          name="restaurantId"
        />

        <label htmlFor="date">Datum:</label>
        <input id="date" disabled={true} value={booking.date} name="date" />

        <label htmlFor="time">Tid:</label>
        <input id="time" disabled={true} value={booking.time} name="time" />

        <label htmlFor="numberOfGuests">Antal Gäster:</label>
        <input
          type="number"
          id="numberOfGuests"
          disabled={true}
          value={booking.numberOfGuests}
          name="numberOfGuests"
        />
      </div>
    );
  });
};
