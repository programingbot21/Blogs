import { useState } from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Create from './components/Create/Create';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Create/>
      <Navbar/>
      <Home/>
      <Footer/>      
    </>
  )
}

export default App
