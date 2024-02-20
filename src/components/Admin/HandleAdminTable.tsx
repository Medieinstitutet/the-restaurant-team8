import { BookingClass } from "../../models/BookingClass";
import { CustomerClass } from "../../models/CustomerClass";

interface BookingTableProps {
  bookings: BookingClass[];
  customers: CustomerClass[];
  handleUpdate: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const HandleAdminTable = ({
  bookings,
  customers,
  handleUpdate,
  handleDelete,
}: BookingTableProps) => {
  console.log(customers);
  return (
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
            console.log("looking:", booking.customerId);
            const customer = customers.find(
              (c) => c._id === booking.customerId
            );
            console.log("found customer:", customer);
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
  );
};
