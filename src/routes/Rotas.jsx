import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useDemo } from '../context/DemoContext'

import Login from '../pages/Login'
import Registrar from '../pages/Registrar'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Transacoes from '../pages/Transacoes'
import Metas from '../pages/Metas'
import Relatorios from '../pages/Relatorios'
import Educacao from '../pages/Educacao'
import Configuracoes from '../pages/Configuracoes'
import NotFound from '../pages/NotFound'

function RotaPrivada({ children }) {
  const { token, carregando } = useAuth()
  const { modoDemo } = useDemo()
  
  if (carregando) return <div className="p-4">Carregando...</div>
  
  // Permitir acesso se estiver logado OU em modo demo
  if (!token && !modoDemo) return <Navigate to="/login" replace />
  
  return children
}

export default function Rotas() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registrar />} />
      <Route path="/home" element={<Home />} />
      
      {/* Rotas protegidas */}
      <Route path="/dashboard" element={<RotaPrivada><Dashboard /></RotaPrivada>} />
      <Route path="/transactions" element={<RotaPrivada><Transacoes /></RotaPrivada>} />
      <Route path="/goals" element={<RotaPrivada><Metas /></RotaPrivada>} />
      <Route path="/reports" element={<RotaPrivada><Relatorios /></RotaPrivada>} />
      <Route path="/education" element={<RotaPrivada><Educacao /></RotaPrivada>} />
      <Route path="/settings" element={<RotaPrivada><Configuracoes /></RotaPrivada>} />
      
      {/* Redirecionamentos */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
