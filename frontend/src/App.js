import "./App.css";
import AllBooks from "./Components/AllBooks";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Checkout from "./Components/Checkout/Checkout";

function App() {
 
  return (
    <div >
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/allbooks" element={<AllBooks/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
