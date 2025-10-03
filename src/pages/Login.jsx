import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DollarSign, User, Lock, Eye, EyeOff } from 'lucide-react'
import Input from '../components/Input'
import Botao from '../components/Botao'
import Alerta from '../components/Alerta'
import { useAuth } from '../context/AuthContext'
import { useDemo } from '../context/DemoContext'
import { validarEmail } from '../utils/validacoes'

export default function Login() {
  const { entrar } = useAuth()
  const { ativarDemo } = useDemo()
  const navegar = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setErro('')
    if (!validarEmail(email)) return setErro('Informe um e-mail válido.')
    if (!senha) return setErro('Informe a senha.')
    try {
      setCarregando(true)
      await entrar(email, senha)
      navegar('/dashboard')
    } catch (ex) {
      setErro(ex?.response?.data?.mensagem || 'Não foi possível entrar. Verifique seus dados.')
    } finally {
      setCarregando(false)
    }
  }

  function entrarModoDemo() {
    ativarDemo()
    navegar('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e título */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="w-10 h-10 text-white" />
            <h1 className="text-3xl font-bold text-white">MoneyMapp TCC</h1>
          </div>
          <p className="text-blue-100">Sua plataforma de educação financeira</p>
        </div>

        {/* Card de login */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Acessar conta</h2>
          
          {erro && <div className="mb-6"><Alerta tipo="erro" mensagem={erro} /></div>}
          
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {mostrarSenha ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {carregando ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : null}
              {carregando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
          
          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">ou</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          {/* Botão modo demo */}
          <button
            onClick={entrarModoDemo}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200"
          >
            Entrar em modo demonstração
          </button>
          
          {/* Link para registro */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Não tem conta?{' '}
              <Link to="/register" className="text-blue-600 font-medium hover:text-blue-700">
                Criar conta
              </Link>
            </p>
          </div>
        </div>
        
        {/* Rodapé */}
        <div className="text-center mt-8">
          <p className="text-blue-100/80 text-sm">
            © 2024 MoneyMapp TCC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
