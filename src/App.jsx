import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ScrollToTop from './components/scrolltotop/scrollTotop'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
