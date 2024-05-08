import "./App.css";
import AllBooks from "./Components/AllBooks";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Spinner from './Components/Spinner'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Checkout from "./Components/Checkout/Checkout";
import AddProducts from "./Components/AddProducts";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetail from "./Components/BookDetail";
import Quran from "./Components/Quran/Quran";
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
import AboutQuran from "./Components/Quran/AboutQuran";
import QuranTafaseers from "./Components/Quran/QuranTafaseers";
import Sufism from "./Components/OtherBooks/Sufism";
import Hadith from "./Components/Hadith/Hadith";
import SahihBukhari from "./Components/Hadith/SahihBukhari";
import SahihMuslim from "./Components/Hadith/SahihMuslim";
import SunanAbuDawaod from "./Components/Hadith/SunanAbuDawaod";
import SunanIbnMajah from "./Components/Hadith/SunanIbnMajah";
import SunanNasai from "./Components/Hadith/SunanNasai";
import FAQ from "./Components/FAQ";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  let [response, setResponse] = useState('');

  const message = (message) => {
    setResponse(message)
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
  
        const response = await axios.get('https://booksplatform-theta.vercel.app/books');
        const mybooks = response.data;
        setData(mybooks);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [response.message],);

  localStorage.setItem('books' , JSON.stringify(data))
  let allbooks=localStorage.getItem('books')

  return (
    <div >
      {loading ? <Spinner/> :
        <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/allbooks"  element={<AllBooks books={JSON.parse(allbooks)}/>}></Route>
          <Route path="/book/:name"  element={<BookDetail/>}></Route>
          <Route path="/checkout" element={<Checkout responseAPI={message}/>}></Route>
          <Route path="/addProduct" element={<AddProducts/>}></Route>
          <Route path="/quran" element={<Quran/>}></Route>
          <Route path="/quranBook" element={<QuranBook/>}></Route>
          <Route path="/aboutQuran" element={<AboutQuran/>}></Route>
          <Route path="/quranTranslation" element={<QuranTranslation/>}></Route>
          <Route path="/qurantafaseer" element={<QuranTafaseers/>}></Route>
          <Route path="/hadith" element={<Hadith/>}></Route>
          <Route path="/sahihBukhari" element={<SahihBukhari/>}></Route>
          <Route path="/sahihMuslim" element={<SahihMuslim/>}></Route>
          <Route path="/sunanAbuDawood" element={<SunanAbuDawaod/>}></Route>
          <Route path="/sunanIbnMajah" element={<SunanIbnMajah/>}></Route>
          <Route path="/sunanNasai" element={<SunanNasai/>}></Route>
          <Route path="/otherBooks" element={<OtherBooks/>}></Route>
          <Route path="/political" element={<Political/>}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/novels" element={<Novels/>}></Route>
          <Route path="/iqbaliyat" element={<Iqbaliyat/>}></Route>
          <Route path="/biography" element={<Biography/>}></Route>
          <Route path="/children" element={<Children/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path="/sufism" element={<Sufism/>}></Route>
          <Route path="/faq" element={<FAQ/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>}
     
    </div>
  );
}

export default App;
