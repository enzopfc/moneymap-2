import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BotaoVoltar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleVoltar = () => {
    // Se há histórico de navegação, volta para a página anterior
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      // Caso contrário, vai para o dashboard
      navigate('/dashboard')
    }
  }

  // Não mostrar o botão nas páginas de login, registro e home
  const rotasExcluidas = ['/login', '/register', '/home']
  if (rotasExcluidas.includes(location.pathname)) {
    return null
  }

  return (
    <button
      onClick={handleVoltar}
      className="fixed top-20 left-6 z-40 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 md:left-28"
      title="Voltar"
    >
      <ArrowLeft className="w-5 h-5 text-gray-700" />
    </button>
  )
}