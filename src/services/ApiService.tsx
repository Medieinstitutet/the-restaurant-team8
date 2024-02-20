import axios from "axios";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net";

export const ApiService = {
  fetchBookings: () =>
    axios.get(`${BASE_URL}/booking/restaurant/65ca1266c11c3c8be672e7c9`),
  fetchCustomer: (customerId: string) =>
    axios.get(`${BASE_URL}/customer/${customerId}`),
  updateBooking: (id: string) => axios.put(`${BASE_URL}/booking/update/${id}`),
  deleteBooking: (id: string) =>
    axios.delete(`${BASE_URL}/booking/delete/${id}`),
};
