import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"

export const Layout = () => {
    return (
        <>
            <Navbar />
        <main>
            <Outlet />
        </main>
        <footer>Social o sånt</footer>
        </>
    )
    
}