import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar({ onToggleMenu }) {
  const { token, sair } = useAuth()
  const navegar = useNavigate()

  function aoSair() {
    sair()
    navegar('/login')
  }

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={onToggleMenu} aria-label="Abrir menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Link to="/dashboard" className="text-lg font-bold text-emerald-600">MoneyMapp TCC</Link>
        </div>
        {token ? (
          <button onClick={aoSair} className="text-sm px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">Sair</button>
        ) : (
          <Link to="/login" className="text-sm px-3 py-1.5 border rounded hover:bg-gray-50">Entrar</Link>
        )}
      </div>
    </header>
  )
}
