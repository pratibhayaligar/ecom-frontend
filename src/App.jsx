import React from "react";
import Products from "./components/Products";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
