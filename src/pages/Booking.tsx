import { BookTable } from "../components/bookTable/BookTable";
import { Header } from "../components/header/Header";
import HeaderImg from "../images/booking_headerimage1.png";
export const Booking = () => {
  return (
    <>
      <Header title="Boka bord" imageUrl={HeaderImg} />
      <BookTable></BookTable>
    </>
  );
};
