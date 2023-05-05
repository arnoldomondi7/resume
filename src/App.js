import React from "react"
import { Routes, Route } from "react-router-dom"
import NavbarComp from "./components/Navbar.comp"

import HomePage from "./pages/Home.page"
import Projects from "./pages/Projects.jsx"
import Experience from "./pages/Experience"
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
