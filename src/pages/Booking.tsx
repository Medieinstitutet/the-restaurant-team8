import { BookTable } from "../components/booking/BookTable"
import { Header } from "../components/header/Header"
import HeaderImg from '../images/booking_headerimage1.png'
export const Booking = () => {
    return (
    <>
    <Header title="Boka bord" imageUrl={HeaderImg} />
    <BookTable></BookTable>
    </>
    )
    
}