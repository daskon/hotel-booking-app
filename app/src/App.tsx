import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hotel from './pages/hotel/Hotel';
import Home from './pages/landing/Home';
import Listing from './pages/listing/Listing';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hotels' element={<Listing />} />
            <Route path='/hotel/:id' element={<Hotel />} />
          </Routes>
         </Suspense>
      </Router>
    </div>
  );
}

export default App;
