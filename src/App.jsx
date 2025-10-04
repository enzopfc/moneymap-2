import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Rotas from './routes/Rotas'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import BotaoVoltar from './components/BotaoVoltar'

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const location = useLocation()
  
  // Páginas que não devem mostrar sidebar
  const paginasSemSidebar = ['/home', '/login', '/register']
  const mostrarSidebar = !paginasSemSidebar.includes(location.pathname)

  // Se é uma página sem sidebar (home, login), renderizar apenas o conteúdo
  if (!mostrarSidebar) {
    return (
      <div className="min-h-screen">
        <Rotas />
      </div>
    )
  }

  // Para páginas com sidebar (dashboard e outras)
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50">
      <div className="flex h-full">
        <Sidebar aberto={menuAberto} onFechar={() => setMenuAberto(false)} />
        <main className="flex-1 ml-0 md:ml-20 transition-all duration-300 ease-in-out overflow-auto relative">
          <BotaoVoltar />
          <div className="transition-all duration-500 ease-in-out">
            <Rotas />
          </div>
          
          {/* Copyright Footer */}
          <footer className="hidden md:block absolute bottom-4 right-4">
            <p className="text-sm text-gray-500">
              © 2024 MoneyMapp TCC. Todos os direitos reservados.
            </p>
          </footer>
        </main>
      </div>
      
      {/* Menu Toggle para Mobile */}
      <button
        onClick={() => setMenuAberto(true)}
        className="md:hidden fixed top-4 left-4 z-30 p-3 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
      >
        <svg className="w-6 h-6 text-gray-700 transition-colors hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
