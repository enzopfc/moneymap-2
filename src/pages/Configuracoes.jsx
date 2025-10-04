import React, { useState } from 'react'
import { 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Globe, 
  Shield, 
  Download, 
  Trash2,
  Eye,
  EyeOff,
  Save,
  Camera,
  Mail,
  Phone
} from 'lucide-react'
import { useDemo } from '../context/DemoContext'

const dadosUsuario = {
  nome: 'João Silva',
  email: 'joao.silva@email.com',
  telefone: '(11) 98765-4321',
  avatar: '👤',
  plano: 'Premium',
  membro_desde: '2023-06-15'
}

function ConfigSection({ icone: Icone, titulo, children, cor = 'from-blue-500 to-blue-600' }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-xl bg-gradient-to-r ${cor}`}>
          <Icone className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{titulo}</h3>
      </div>
      {children}
    </div>
  )
}

function InputField({ label, type = 'text', value, placeholder, onChange, icon: Icon }) {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === 'password' && showPassword ? 'text' : type

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full ${Icon ? 'pl-12' : 'pl-4'} ${type === 'password' ? 'pr-12' : 'pr-4'} py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  )
}

function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          checked ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}

export default function Configuracoes() {
  const [perfil, setPerfil] = useState({
    nome: dadosUsuario.nome,
    email: dadosUsuario.email,
    telefone: dadosUsuario.telefone
  })
  
  const [senha, setSenha] = useState({
    atual: '',
    nova: '',
    confirmar: ''
  })

  const [notificacoes, setNotificacoes] = useState({
    email: true,
    push: false,
    sms: true,
    relatorios: true
  })

  const [preferencias, setPreferencias] = useState({
    tema: 'claro',
    idioma: 'pt-BR',
    moeda: 'BRL',
    timezone: 'America/Sao_Paulo'
  })

  const { modoDemo } = useDemo()

  const handleSavePerfil = () => {
    alert('Perfil atualizado com sucesso!\n(Funcionalidade mockada para demonstração)')
  }

  const handleChangePassword = () => {
    if (senha.nova !== senha.confirmar) {
      alert('As senhas não coincidem!')
      return
    }
    alert('Senha alterada com sucesso!\n(Funcionalidade mockada para demonstração)')
    setSenha({ atual: '', nova: '', confirmar: '' })
  }

  const handleExportData = () => {
    alert('Dados exportados com sucesso!\n(Funcionalidade mockada para demonstração)')
  }

  const handleDeleteAccount = () => {
    if (confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      alert('Conta excluída!\n(Funcionalidade mockada para demonstração)')
    }
  }

  return (
    <div className="h-full w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Configurações</h1>
          <p className="text-gray-600">Gerencie sua conta e preferências</p>
        </div>
        {modoDemo && (
          <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium">
            ⚙️ Dados de Demonstração
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Perfil do usuário */}
        <ConfigSection icone={User} titulo="Informações Pessoais" cor="from-blue-500 to-blue-600">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl text-white">
                {dadosUsuario.avatar}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{dadosUsuario.nome}</h4>
                <p className="text-gray-600">Plano {dadosUsuario.plano}</p>
                <p className="text-sm text-gray-500">Membro desde {new Date(dadosUsuario.membro_desde).toLocaleDateString('pt-BR')}</p>
              </div>
              <button className="ml-auto p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>

            <InputField
              label="Nome completo"
              value={perfil.nome}
              placeholder="Seu nome"
              onChange={(e) => setPerfil({ ...perfil, nome: e.target.value })}
              icon={User}
            />

            <InputField
              label="E-mail"
              type="email"
              value={perfil.email}
              placeholder="seu@email.com"
              onChange={(e) => setPerfil({ ...perfil, email: e.target.value })}
              icon={Mail}
            />

            <InputField
              label="Telefone"
              value={perfil.telefone}
              placeholder="(11) 99999-9999"
              onChange={(e) => setPerfil({ ...perfil, telefone: e.target.value })}
              icon={Phone}
            />

            <button
              onClick={handleSavePerfil}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Salvar Alterações
            </button>
          </div>
        </ConfigSection>

        {/* Segurança */}
        <ConfigSection icone={Lock} titulo="Segurança" cor="from-red-500 to-red-600">
          <div className="space-y-4">
            <InputField
              label="Senha atual"
              type="password"
              value={senha.atual}
              placeholder="Digite sua senha atual"
              onChange={(e) => setSenha({ ...senha, atual: e.target.value })}
              icon={Lock}
            />

            <InputField
              label="Nova senha"
              type="password"
              value={senha.nova}
              placeholder="Digite a nova senha"
              onChange={(e) => setSenha({ ...senha, nova: e.target.value })}
              icon={Lock}
            />

            <InputField
              label="Confirmar nova senha"
              type="password"
              value={senha.confirmar}
              placeholder="Confirme a nova senha"
              onChange={(e) => setSenha({ ...senha, confirmar: e.target.value })}
              icon={Lock}
            />

            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium text-blue-900 mb-2">Dicas para uma senha forte:</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Use pelo menos 8 caracteres</li>
                <li>• Combine letras, números e símbolos</li>
                <li>• Evite informações pessoais</li>
              </ul>
            </div>

            <button
              onClick={handleChangePassword}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Alterar Senha
            </button>
          </div>
        </ConfigSection>

        {/* Notificações */}
        <ConfigSection icone={Bell} titulo="Notificações" cor="from-emerald-500 to-emerald-600">
          <div className="space-y-4">
            <Toggle
              label="Notificações por e-mail"
              checked={notificacoes.email}
              onChange={() => setNotificacoes({ ...notificacoes, email: !notificacoes.email })}
            />
            <Toggle
              label="Notificações push"
              checked={notificacoes.push}
              onChange={() => setNotificacoes({ ...notificacoes, push: !notificacoes.push })}
            />
            <Toggle
              label="SMS para alertas importantes"
              checked={notificacoes.sms}
              onChange={() => setNotificacoes({ ...notificacoes, sms: !notificacoes.sms })}
            />
            <Toggle
              label="Relatórios mensais automáticos"
              checked={notificacoes.relatorios}
              onChange={() => setNotificacoes({ ...notificacoes, relatorios: !notificacoes.relatorios })}
            />

            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-emerald-700">
                ✅ Você receberá notificações sobre: metas atingidas, vencimento de contas e relatórios mensais.
              </p>
            </div>
          </div>
        </ConfigSection>

        {/* Preferências */}
        <ConfigSection icone={Palette} titulo="Preferências" cor="from-purple-500 to-purple-600">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tema</label>
              <select
                value={preferencias.tema}
                onChange={(e) => setPreferencias({ ...preferencias, tema: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              >
                <option value="claro">Claro</option>
                <option value="escuro">Escuro</option>
                <option value="auto">Automático</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
              <select
                value={preferencias.idioma}
                onChange={(e) => setPreferencias({ ...preferencias, idioma: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              >
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="es-ES">Español</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Moeda</label>
              <select
                value={preferencias.moeda}
                onChange={(e) => setPreferencias({ ...preferencias, moeda: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              >
                <option value="BRL">Real Brasileiro (R$)</option>
                <option value="USD">Dólar Americano ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>
          </div>
        </ConfigSection>

        {/* Dados e Privacidade */}
        <div className="xl:col-span-2">
          <ConfigSection icone={Shield} titulo="Dados e Privacidade" cor="from-orange-500 to-orange-600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={handleExportData}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Exportar Dados
              </button>

              <button className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                Política de Privacidade
              </button>

              <button
                onClick={handleDeleteAccount}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Excluir Conta
              </button>
            </div>

            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h5 className="font-medium text-orange-900 mb-2">📊 Resumo da Conta</h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-orange-700 font-medium">Transações:</span>
                  <p className="text-orange-800">148 registros</p>
                </div>
                <div>
                  <span className="text-orange-700 font-medium">Metas:</span>
                  <p className="text-orange-800">5 objetivos</p>
                </div>
                <div>
                  <span className="text-orange-700 font-medium">Relatórios:</span>
                  <p className="text-orange-800">12 gerados</p>
                </div>
                <div>
                  <span className="text-orange-700 font-medium">Último acesso:</span>
                  <p className="text-orange-800">Hoje, 14:30</p>
                </div>
              </div>
            </div>
          </ConfigSection>
        </div>
      </div>
    </div>
  )
}
