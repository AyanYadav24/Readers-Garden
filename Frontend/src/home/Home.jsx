import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";



// IS PAGE PE JO KUCH HOGA WO SAB DIKHEGA HOME PAGE PE (SAMJHO TO YE APP.JSX KA KAAM KAR RHA HAI)
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <WhyUs/>
      <Testimonials/>

      <Footer />
    </>
  );
}

export default Home;
