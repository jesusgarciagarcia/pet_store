import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './common/Layout.jsx'
import Home from './Home.jsx'
import Pets from './Pets.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/pets" element={<Pets />} />
          </Route>
      </Routes>
  </BrowserRouter>
)
