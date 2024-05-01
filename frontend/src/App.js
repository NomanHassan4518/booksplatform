import "./App.css";
import AllBooks from "./Components/AllBooks";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Checkout from "./Components/Checkout/Checkout";
import AddProducts from "./Components/AddProducts";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quran from "./Components/Quran/Quran";
import BookModel from "./Components/BookDetail";
import QuranBook from "./Components/Quran/QuranBook";
import QuranTranslation from "./Components/Quran/QuranTranslation";
import Political from "./Components/OtherBooks/Political";
import OtherBooks from "./Components/OtherBooks/OtherBooks";
import History from "./Components/OtherBooks/History";
import Novels from "./Components/OtherBooks/Novels";
import Iqbaliyat from "./Components/OtherBooks/Iqbaliyat";
import Biography from "./Components/OtherBooks/Biography";
import Education from "./Components/OtherBooks/Education";
import Children from "./Components/OtherBooks/Children";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
  
        const response = await axios.get('https://booksplatform-theta.vercel.app/books');
  
        const data = response.data;
  
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [data]);

  localStorage.setItem('books' , JSON.stringify(data))
let allbooks=localStorage.getItem('books')
  return (
    <div >
      {/* {loading ? <div className="w-full h-screen flex items-center justify-center ">Loading...</div> : null} */}
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/allbooks"  element={<AllBooks books={JSON.parse(allbooks)}/>}></Route>
          <Route path="/book/:name"  element={<BookModel/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/addProduct" element={<AddProducts/>}></Route>
          <Route path="/quran" element={<Quran/>}></Route>
          <Route path="/quranBook" element={<QuranBook/>}></Route>
          <Route path="/quranTranslation" element={<QuranTranslation/>}></Route>
          <Route path="/otherBooks" element={<OtherBooks/>}></Route>
          <Route path="/political" element={<Political/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/novels" element={<Novels/>}></Route>
          <Route path="/iqbaliyat" element={<Iqbaliyat/>}></Route>
          <Route path="/biography" element={<Biography/>}></Route>
          <Route path="/children" element={<Children/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
