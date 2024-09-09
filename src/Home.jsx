import Nav from "./layouts/nav/Nav";
import Hero from "./layouts/hero/Hero";
import AboutUs from "./layouts/about/About";
import Features from "./layouts/features/Features";
import Pricing from "./layouts/pricing/Pricing";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import Faq from "./layouts/faq/faq";
import Contact from "./layouts/contact-us/ContactUs";

const Home = () => {
  return (
    <>
      <Nav />
      <div className='wrapper'>
        <Hero />
        <AboutUs />
        <Features />
        <Pricing />
        <Contact />
        <Faq />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default Home;
