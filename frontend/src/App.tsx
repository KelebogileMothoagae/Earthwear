

import './App.css'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Products from "./pages/Single"
import Single from "./pages/Single";
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
  
     <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
       <Route path="/contact" element={<Login />} />
        <Route path="/contact" element={<Login />} />
          <Route path="/product/:id" element={<Single  />} />

    </Routes>
    </>
  )
}


export default App
  