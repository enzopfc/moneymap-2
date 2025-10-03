import React, { useState } from 'react'
import Rotas from './routes/Rotas'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import BotaoVoltar from './components/BotaoVoltar'

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
      <Navbar onToggleMenu={() => setMenuAberto((v) => !v)} />
      <BotaoVoltar />
      <div className="flex h-[calc(100vh-4rem)] w-full">
        <Sidebar aberto={menuAberto} onFechar={() => setMenuAberto(false)} />
        <main className="flex-1 overflow-auto md:ml-20 transition-all duration-300">
          <div className="h-full w-full p-6">
            <Rotas />
          </div>
        </main>
      </div>
    </div>
  )
}
