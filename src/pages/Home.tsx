import { Header } from "../components/header/Header"
import HeaderImage from '../../src/images/home_headerimg.png' 
export const Home = () => {
    return (
        <>
        <Header title = "Välkommen till Lotus Lounge" imageUrl={HeaderImage} />
        </>
    )
   
}