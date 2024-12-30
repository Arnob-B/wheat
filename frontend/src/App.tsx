//import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/route/Home"
import Nav from "@/components/Nav"
import Nav2 from "./components/Nav2"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="home" element={<Home />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
