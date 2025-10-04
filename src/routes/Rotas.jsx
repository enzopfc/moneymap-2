import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Registrar from '../pages/Registrar'
import Dashboard from '../pages/Dashboard'
import Transacoes from '../pages/Transacoes'
import Metas from '../pages/Metas'
import Relatorios from '../pages/Relatorios'
import Educacao from '../pages/Educacao'
import Configuracoes from '../pages/Configuracoes'
import NotFound from '../pages/NotFound'

function RotaPrivada({ children }) {
  const { token, carregando } = useAuth()
  const demoMode = localStorage.getItem('demoMode')
  
  if (carregando) return <div className="p-4">Carregando...</div>
  if (!token && !demoMode) return <Navigate to="/login" replace />
  return children
}

export default function Rotas() {
  return (
    <Routes>
      {/* Páginas Públicas */}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registrar />} />

      {/* Páginas do Sistema (Privadas/Demo) */}
      <Route path="/dashboard" element={<RotaPrivada><Dashboard /></RotaPrivada>} />
      <Route path="/transacoes" element={<RotaPrivada><Transacoes /></RotaPrivada>} />
      <Route path="/metas" element={<RotaPrivada><Metas /></RotaPrivada>} />
      <Route path="/relatorios" element={<RotaPrivada><Relatorios /></RotaPrivada>} />
      <Route path="/educacao" element={<RotaPrivada><Educacao /></RotaPrivada>} />
      <Route path="/configuracoes" element={<RotaPrivada><Configuracoes /></RotaPrivada>} />

      {/* Rotas de Redirecionamento */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
