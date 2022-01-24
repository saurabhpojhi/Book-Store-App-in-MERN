import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Book from "./components/Book";
import Newarrival from "./components/Newarrival";

function App() {
  return ( 
 <> 
      <Navbar />
      
      <Routes> 
      <Route path="/" element={<Home />} />
      
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Book" element={<Book />} />
      <Route path="/Newarrival" element={<Newarrival />} />

       </Routes>
     


      </>
  );
}

export default App;
