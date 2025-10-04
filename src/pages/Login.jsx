import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, PiggyBank, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { validarEmail } from '../utils/validacoes'

export default function Login() {
  const { entrar } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setErro('')
    
    if (!validarEmail(email)) {
      return setErro('Informe um e-mail válido.')
    }
    if (!senha) {
      return setErro('Informe a senha.')
    }

    try {
      setCarregando(true)
      
      // Login mock para demonstração
      if (email === 'demo@moneymapp.com' && senha === 'demo123') {
        localStorage.setItem('authToken', 'mock-token')
        localStorage.setItem('demoMode', 'true')
        navigate('/dashboard')
        return
      }
      
      // Tentativa de login real
      await entrar(email, senha)
      navigate('/dashboard')
    } catch (ex) {
      setErro(ex?.response?.data?.mensagem || 'E-mail ou senha incorretos. Tente demo@moneymapp.com / demo123')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center p-6">
      {/* Botão Voltar */}
      <button 
        onClick={() => navigate('/home')}
        className="fixed top-6 left-6 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Voltar para Home</span>
      </button>

      {/* Formulário de Login */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo e Título */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <PiggyBank className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">MoneyMapp</h1>
            <p className="text-gray-600">Faça login para continuar</p>
          </div>

          {/* Alerta de Erro */}
          {erro && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{erro}</p>
            </div>
          )}

          {/* Demo Info */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm font-medium mb-1">Conta de demonstração:</p>
            <p className="text-blue-700 text-sm">E-mail: demo@moneymapp.com</p>
            <p className="text-blue-700 text-sm">Senha: demo123</p>
          </div>

          {/* Formulário */}
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Campo E-mail */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {mostrarSenha ? (
                    <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {carregando ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span className="ml-2">Entrando...</span>
                </div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          {/* Link para Demo */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
            >
              Ou acesse a demonstração diretamente
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-white text-sm opacity-75">
            © 2024 MoneyMapp TCC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
