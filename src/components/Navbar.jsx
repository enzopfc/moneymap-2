import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, LogOut, DollarSign } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Navbar({ onToggleMenu }) {
  const { token, usuario, sair } = useAuth()
  const navegar = useNavigate()
  
  function aoSair() { sair(); navegar('/login') }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" 
            onClick={onToggleMenu} 
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
          <Link to="/dashboard" className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors">
            <DollarSign className="w-8 h-8" />
            <span className="text-xl font-bold">MoneyMapp TCC</span>
          </Link>
        </div>
        
        {token ? (
          <div className="flex items-center gap-4">
            {usuario && (
              <span className="hidden md:block text-blue-100 text-sm">
                Olá, {usuario.nome || 'Usuário'}!
              </span>
            )}
            <button 
              onClick={aoSair} 
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block">Sair</span>
            </button>
          </div>
        ) : (
          <Link 
            to="/login" 
            className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Entrar
          </Link>
        )}
      </div>
    </header>
  )
}
