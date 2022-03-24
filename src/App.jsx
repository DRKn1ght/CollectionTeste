// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import AboutController from './controller/AboutController'
import LoginController from './controller/LoginController'

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<LoginController />}/>
        <Route path="/:eventName" element={<AboutController />}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App