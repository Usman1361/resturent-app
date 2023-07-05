import React from "react";
import Header from "./components/Header";
import DishDetails from "./components/DishDetails/DishDetails";
import CardCollection from "./components/CardCollection/CardCollection";
import LongCardSection from "./components/LongCardSection/LongCardSection";
import SmallCardPortion from "./components/SmallCardPortion/SmallCardPortion";
import Deal from "./components/Deal/Deal";
import EventMedia from "./components/EventMedia/EventMedia";
import EventInfo from "./components/EventInfo/EventInfo";
import QualitySection from "./components/QualitySection/QualitySection";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookTable from "./pages/BookTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DishDetails />
                <CardCollection />
                <LongCardSection />
                <SmallCardPortion />
                <Deal />
                <EventMedia />
                <EventInfo />
                <QualitySection />
                <CustomerReview />
                <NewsLetter />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Menu />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="/booktable"
            element={
              <>
                <BookTable />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
