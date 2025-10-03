import React, { useState } from 'react'
import Rotas from './routes/Rotas'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="container-app">
      <Navbar onToggleMenu={() => setMenuAberto((v) => !v)} />
      <div className="layout-principal">
        <Sidebar aberto={menuAberto} onFechar={() => setMenuAberto(false)} />
        <main className="flex-1">
          <Rotas />
        </main>
      </div>
    </div>
  )
}
