import React from 'react';
import './css/App.css';
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
          <Navbar />
          <Shop />
          <Footer />
      </div>
  );
}

export default App;
