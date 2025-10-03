import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

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
  if (carregando) return <div className="p-4">Carregando...</div>
  if (!token) return <Navigate to="/login" replace />
  return children
}

export default function Rotas() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registrar />} />
      <Route path="/dashboard" element={<RotaPrivada><Dashboard /></RotaPrivada>} />
      <Route path="/transactions" element={<RotaPrivada><Transacoes /></RotaPrivada>} />
      <Route path="/goals" element={<RotaPrivada><Metas /></RotaPrivada>} />
      <Route path="/reports" element={<RotaPrivada><Relatorios /></RotaPrivada>} />
      <Route path="/education" element={<RotaPrivada><Educacao /></RotaPrivada>} />
      <Route path="/settings" element={<RotaPrivada><Configuracoes /></RotaPrivada>} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
