
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/route/Home"
import Nav from "@/components/navigations/Nav"
import Founders from "./components/founders/Founders"
import ComingSoon from "./components/waitinglist/ComingSoon"
import Contacts from "./components/contacts/Contacts"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="home" element={<Home />}>
          </Route>
          <Route path="founders" element={<Founders />}>
          </Route>
          <Route path="waiting" element={<ComingSoon />}>
          </Route>
          <Route path="contact" element={<Contacts />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
