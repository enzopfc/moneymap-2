import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BotaoVoltar() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Páginas que não devem mostrar o botão voltar
  const paginasSemVoltar = ['/home', '/login', '/dashboard']
  
  if (paginasSemVoltar.includes(location.pathname)) {
    return null
  }

  const handleVoltar = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <button
      onClick={handleVoltar}
      className="fixed top-6 left-24 md:left-28 z-20 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-gray-800"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="font-medium">Voltar</span>
    </button>
  )
}