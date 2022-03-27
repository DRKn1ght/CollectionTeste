// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import AboutController from './controller/AboutViewController'
import ProductsController from './controller/ProductsViewController'

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<ProductsController />}/>
        <Route path="/about" element={<AboutController />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App