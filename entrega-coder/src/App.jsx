import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import CategoryView from "./views/CategoryView";
import ProductDetail from "./components/ProductDetail";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route exact path="/" element={<HomeView/>} />
          <Route exact path="/category/:itemName" element={<CategoryView/>} />
          <Route exact path="/productos/:id" element={<ProductDetail/>} />
          <Route exact path="/contact" element={<ContactView/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
