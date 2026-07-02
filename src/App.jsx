import React from 'react'
import Navbar from "./components/Navbar.jsx"
import RecipeDetailView from "./components/RecipeDetailView.jsx"
import SearchView from "./components/SearchView.jsx";
import Cuisines from "./components/Cuisines.jsx";
import HomeView from "./components/HomeView.jsx";
// import SearchView from "./components/SearchView.jsx";
// import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <Navbar />
          <Cuisines />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App