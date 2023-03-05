import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AddMeal from "./containers/AddMeal/AddMeal";


function App() {



  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container pt-5">
        <Routes>
          <Route path="/add-new-meal" element={<AddMeal/>}/>
          <Route path="*" element={<h2 className="text-center mt-5">Page not found!</h2>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
