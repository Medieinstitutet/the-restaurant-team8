import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"

export const Layout = () => {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>Social o sånt</footer>
        </>
    )
    
}