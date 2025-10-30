import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { FaHome } from "react-icons/fa"

import Home from "./pages/Home"
import Loja from "./pages/Loja"

function App() {
  return (
    <BrowserRouter>
      <main className="relative min-h-screen">
        <div className="fixed top-6 left-6 z-50">
          <Link
            to="/"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-black bg-white text-black text-2xl hover:bg-gray-100 transition"
            aria-label="Ir para Home"
            title="Home"
          >
            <FaHome />
          </Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/loja/:lojaId" element={<Loja />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
