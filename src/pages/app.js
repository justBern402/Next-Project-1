import BernNav from "../Components/Navbar.js";
import Hero from "./hero.js";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";

export default function App() {

    return(
        <>

        <nav>
            <BernNav/>
        </nav>
        <main>

            <Home/>
            <Hero/>
            <About/>
            <Contact/>

        </main>
        
        </>
    )
}