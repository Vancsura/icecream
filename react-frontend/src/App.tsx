import React from 'react';
import './css/App.css';
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="w-100">
          <Navbar />
          <Shop />
          <Footer />
      </div>
  );
}

export default App;
