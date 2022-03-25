// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import AboutController from './controller/AboutController'
import ProductsController from './controller/ProductsController'

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<ProductsController />}/>
        <Route path="/:eventName" element={<AboutController />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App