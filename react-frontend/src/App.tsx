import React from 'react';
import './css/App.css';
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShopBaja from "./components/ShopBaja";
import ShopErsekcsanad from "./components/ShopErsekcsanad";
import OpeningHours from "./components/OpeningHours";
import Order from "./components/Order";

function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Shop />}/>
                  <Route path="/shop_baja" element={<ShopBaja />}/>
                  <Route path="/shop_ersekcsanad" element={<ShopErsekcsanad />}/>
                  <Route path="/opening_hours" element={<OpeningHours />}/>
                  <Route path="*" element={<Order />}/>
              </Routes>
          </Router>
          <Footer />
      </>
  );
}

export default App;
