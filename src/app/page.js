import Brand from "./Brand";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Offer from "./Offer";
import Products from "./Products";
import Shop from "./Shop";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Brand />
            <Shop />
            <Products />
            <Offer />
            <Feedback />
            <Footer />
        </>
    )
}