import {} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Faq /> */}
      <Footer />
    </>
  );
}

export default App;
