import "../components/Admin/HandleAdmin.scss";
import { HandleAdminTable } from "../components/Admin/HandleAdminTable";
import { HandleAdminApi } from "../components/Admin/HandleAdminApi";
import { ApiService } from "../services/ApiService";

export const Admin = () => {
  const { bookings, customers, setBookings } = HandleAdminApi();

  const handleDelete = (id: string) => {
    ApiService.deleteBooking(id)
      .then(() => {
        setBookings(bookings.filter((booking) => booking._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id: string) => {
    ApiService.updateBooking(id)

      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="booking-container">
      <h1 className="booking-heading" style={{ position: "static" }}>
        Bokningsöversikt
      </h1>
      <HandleAdminTable
        bookings={bookings}
        customers={customers}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
};
