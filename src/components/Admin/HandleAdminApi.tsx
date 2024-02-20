import { useState, useEffect } from "react";
import { ApiService } from "../../services/ApiService";
import { BookingClass } from "../../models/BookingClass";
import { CustomerClass } from "../../models/CustomerClass";

export const HandleAdminApi = () => {
  const [bookings, setBookings] = useState<BookingClass[]>([]);
  const [customers, setCustomers] = useState<CustomerClass[]>([]);

  useEffect(() => {
    const fetchBookingsAndCustomers = async () => {
      try {
        const bookingsResponse = await ApiService.fetchBookings();
        setBookings(bookingsResponse.data);

        const customerResponses = await Promise.all(
          bookingsResponse.data.map((booking: BookingClass) =>
            ApiService.fetchCustomer(booking.customerId)
          )
        );

        const customersData = customerResponses.map(
          (response) => response.data[0]
        );
        console.log("All customers data:", customersData);
        setCustomers(customersData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookingsAndCustomers();
  }, []);

  return { bookings, customers, setBookings };
};
