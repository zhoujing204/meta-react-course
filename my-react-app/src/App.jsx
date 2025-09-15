import React from 'react';

// 1. Import the new Counter component
import MealsProvider from './MealsProvider';
import MealsList from './MealsList';
import Counter from './Counter'; // <-- Import Counter
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import CurrentMessage from './CurrentMessage';
import HTML5Video from './HTML5Video';


function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/Date" className="nav-item">Date</Link>"
        <Link to="/Html5Video" className="nav-item">Html5Video</Link>"
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Date" element={<CurrentMessage />} />
        <Route path="/Html5Video" element={<HTML5Video />} />
      </Routes>

      <MealsProvider>
        <div className="App">
          <header className="App-header">
            {/* 2. Add the Counter component */}
            <Counter /> {/* <-- Use Counter here */}

            <MealsList />
          </header>
        </div>
      </MealsProvider>
    </div>
  );
}

export default App;