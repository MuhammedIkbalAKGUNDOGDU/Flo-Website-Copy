import React from 'react'
import './index.css'
import MainPage from './Pages/MainPage.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
)
