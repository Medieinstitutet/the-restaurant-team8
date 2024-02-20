import axios from "axios";
import { useEffect, useState } from "react";
import { BookingClass } from "../models/BookingClass";
import { CustomerClass } from "../models/CustomerClass";
import "../components/Admin/HandleAdmin.scss"

export interface IBookingUpdate {
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

export const Admin = () => {
  const [bookings, setBookings] = useState<BookingClass[]>([]);
  const [customers, setCustomers] = useState<CustomerClass[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65ca1266c11c3c8be672e7c9"
      )
      .then((response) => {
        console.log(response);
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      if (bookings.length > 0) {
        try {
          const showCustomer = bookings.map((booking) =>
            axios.get(
              `https://school-restaurant-api.azurewebsites.net/customer/${booking.customerId}`
            )
          );

          const customerResponse = await Promise.all(showCustomer);

          console.log(customerResponse);

          const customerData = customerResponse.map(
            (response) => response.data[0]
          );
          setCustomers(customerData);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCustomers();
  }, [bookings]);

  const handleDelete = (id: string) => {
    axios
      .delete(
        `https://school-restaurant-api.azurewebsites.net/booking/delete/${id}`
      )
      .then(() => {
        setBookings(bookings.filter((booking) => booking._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id: string) => {
    axios
      .put(
        `https://school-restaurant-api.azurewebsites.net/booking/update/${id}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className ="booking-container">
      <h1 className ="booking-heading" style={{position: 'static'}}>Bokingsöversikt</h1>
      <div className="booking-table-container">
      <table className="booking-table">
        <thead>
          <tr>
            <th>BokningsID</th>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Datum</th>
            <th>Tid</th>
            <th>Antal</th>
            <th>Åtgärder</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            const customer = customers.find(
              (c) => c._id === booking.customerId
            );
            return (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{customer ? customer.name : "loading..."}</td>
                <td>{customer ? customer.lastname : "Loading..."}</td>
                <td>{customer ? customer.phone : "Loading..."}</td>
                <td>{customer ? customer.email : "Loading..."}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.numberOfGuests}</td>
                <td>
                  <button onClick={() => handleUpdate(booking._id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(booking._id)}>
                    Avboka
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

//   data.map((booking) => {
//     return (
//       <div key={booking._id}>
//         <div
//           style={{
//             width: "50%",
//             backgroundColor: "white",
//             height: "2px",
//             borderRadius: "20px",
//             marginBottom: "20px",
//             marginTop: "20px",
//           }}
//         >
//           {" "}
//         </div>
//         <label htmlFor="customerId">KundId</label>
//         <input
//           id="customerId"
//           disabled={true}
//           value={booking.customerId}
//           name="customerId"
//         />

//         <label htmlFor="_id">BokningsID:</label>
//         <input id="_id" disabled={true} value={booking._id} name="_id" />

//         <label htmlFor="restaurantId">RestaurangID:</label>
//         <input
//           id="restaurantId"
//           disabled={true}
//           value={booking.restaurantId}
//           name="restaurantId"
//         />

//         <label htmlFor="date">Datum:</label>
//         <input id="date" disabled={true} value={booking.date} name="date" />

//         <label htmlFor="time">Tid:</label>
//         <input id="time" disabled={true} value={booking.time} name="time" />

//         <label htmlFor="numberOfGuests">Antal Gäster:</label>
//         <input
//           type="number"
//           id="numberOfGuests"
//           disabled={true}
//           value={booking.numberOfGuests}
//           name="numberOfGuests"
//         />
//       </div>
//     );
//   });
