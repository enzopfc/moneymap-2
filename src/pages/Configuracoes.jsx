import React, { useState, useEffect } from 'react'
import { 
  User, Mail, Lock, Bell, Palette, Moon, Sun, Globe, 
  Smartphone, Shield, Download, Trash2, Save, Settings,
  CreditCard, Eye, EyeOff, Camera, Edit3, Check, X
} from 'lucide-react'

export default function Configuracoes() {
  const [activeTab, setActiveTab] = useState('perfil')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  // Estados do Perfil
  const [perfilData, setPerfilData] = useState({
    nome: 'Usuário Demo',
    email: 'demo@moneymapp.com',
    telefone: '(11) 99999-9999',
    avatar: null
  })
  const [editandoPerfil, setEditandoPerfil] = useState(false)

  // Estados de Segurança
  const [senhaAtual, setSenhaAtual] = useState('')
  const [novaSenha, setNovaSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenhas, setMostrarSenhas] = useState(false)
  const [autenticacao2FA, setAutenticacao2FA] = useState(false)

  // Estados de Preferências
  const [tema, setTema] = useState('claro')
  const [idioma, setIdioma] = useState('pt-BR')
  const [moeda, setMoeda] = useState('BRL')
  const [formatoData, setFormatoData] = useState('DD/MM/YYYY')

  // Estados de Notificações
  const [notificacoes, setNotificacoes] = useState({
    email: true,
    push: true,
    metas: true,
    transacoes: true,
    relatorios: false,
    marketing: false
  })

  useEffect(() => {
    if (mensagem || erro) {
      const timer = setTimeout(() => {
        setMensagem('')
        setErro('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [mensagem, erro])

  const handleSalvarPerfil = (e) => {
    e.preventDefault()
    // Simulação de salvamento
    setMensagem('Perfil atualizado com sucesso!')
    setEditandoPerfil(false)
  }

  const handleAlterarSenha = (e) => {
    e.preventDefault()
    if (novaSenha !== confirmarSenha) {
      setErro('A confirmação de senha não confere.')
      return
    }
    if (novaSenha.length < 6) {
      setErro('A nova senha deve ter pelo menos 6 caracteres.')
      return
    }
    // Simulação de alteração
    setMensagem('Senha alterada com sucesso!')
    setSenhaAtual('')
    setNovaSenha('')
    setConfirmarSenha('')
  }

  const handleExportarDados = () => {
    setMensagem('Solicitação de exportação enviada! Você receberá um email em breve.')
  }

  const handleExcluirConta = () => {
    if (confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      setMensagem('Solicitação de exclusão processada. Sua conta será removida em 7 dias.')
    }
  }

  const tabs = [
    { id: 'perfil', nome: 'Perfil', icon: User },
    { id: 'seguranca', nome: 'Segurança', icon: Shield },
    { id: 'preferencias', nome: 'Preferências', icon: Settings },
    { id: 'notificacoes', nome: 'Notificações', icon: Bell },
    { id: 'dados', nome: 'Dados', icon: Download }
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Configurações</h1>
        <p className="text-gray-600">Gerencie suas preferências e configurações da conta</p>
      </div>

      {/* Alertas */}
      {mensagem && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-400 mr-2" />
            <p className="text-green-800">{mensagem}</p>
          </div>
        </div>
      )}

      {erro && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
          <div className="flex items-center">
            <X className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-red-800">{erro}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar de Navegação */}
        <div className="lg:w-64">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-3" />
                  <span className="font-medium">{tab.nome}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            
            {/* Tab Perfil */}
            {activeTab === 'perfil' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Informações do Perfil</h2>
                  <button
                    onClick={() => setEditandoPerfil(!editandoPerfil)}
                    className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    {editandoPerfil ? 'Cancelar' : 'Editar'}
                  </button>
                </div>

                <form onSubmit={handleSalvarPerfil} className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {perfilData.nome.charAt(0)}
                      </div>
                      {editandoPerfil && (
                        <button
                          type="button"
                          className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                        >
                          <Camera className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Foto do Perfil</h3>
                      <p className="text-sm text-gray-500">Clique no ícone para alterar sua foto</p>
                    </div>
                  </div>

                  {/* Campos do Perfil */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 inline mr-1" />
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        value={perfilData.nome}
                        onChange={(e) => setPerfilData({...perfilData, nome: e.target.value})}
                        disabled={!editandoPerfil}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="h-4 w-4 inline mr-1" />
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={perfilData.email}
                        onChange={(e) => setPerfilData({...perfilData, email: e.target.value})}
                        disabled={!editandoPerfil}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Smartphone className="h-4 w-4 inline mr-1" />
                        Telefone
                      </label>
                      <input
                        type="tel"
                        value={perfilData.telefone}
                        onChange={(e) => setPerfilData({...perfilData, telefone: e.target.value})}
                        disabled={!editandoPerfil}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  {editandoPerfil && (
                    <div className="flex gap-3 pt-4">
                      <button
                        type="submit"
                        className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Salvar Alterações
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Tab Segurança */}
            {activeTab === 'seguranca' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Segurança da Conta</h2>
                
                {/* Alterar Senha */}
                <div className="mb-8 p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Alterar Senha</h3>
                  <form onSubmit={handleAlterarSenha} className="space-y-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Senha Atual</label>
                      <input
                        type={mostrarSenhas ? "text" : "password"}
                        value={senhaAtual}
                        onChange={(e) => setSenhaAtual(e.target.value)}
                        className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nova Senha</label>
                      <input
                        type={mostrarSenhas ? "text" : "password"}
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Nova Senha</label>
                      <input
                        type={mostrarSenhas ? "text" : "password"}
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setMostrarSenhas(!mostrarSenhas)}
                        className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                      >
                        {mostrarSenhas ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Alterar Senha
                    </button>
                  </form>
                </div>

                {/* Autenticação 2FA */}
                <div className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Autenticação de Dois Fatores</h3>
                      <p className="text-sm text-gray-500">Adicione uma camada extra de segurança à sua conta</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={autenticacao2FA}
                        onChange={(e) => setAutenticacao2FA(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  {autenticacao2FA && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        2FA ativado! Use um aplicativo autenticador como Google Authenticator ou Authy.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab Preferências */}
            {activeTab === 'preferencias' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Preferências</h2>
                
                <div className="space-y-6">
                  {/* Tema */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Palette className="h-5 w-5 text-gray-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Aparência</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'claro', nome: 'Claro', icon: Sun },
                        { id: 'escuro', nome: 'Escuro', icon: Moon },
                        { id: 'auto', nome: 'Automático', icon: Settings }
                      ].map(option => {
                        const IconComponent = option.icon
                        return (
                          <button
                            key={option.id}
                            onClick={() => setTema(option.id)}
                            className={`p-4 border-2 rounded-lg flex flex-col items-center transition-colors ${
                              tema === option.id
                                ? 'border-blue-500 bg-blue-50 text-blue-600'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <IconComponent className="h-6 w-6 mb-2" />
                            <span className="text-sm font-medium">{option.nome}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Idioma e Região */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Globe className="h-5 w-5 text-gray-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Idioma e Região</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                        <select
                          value={idioma}
                          onChange={(e) => setIdioma(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="pt-BR">Português (Brasil)</option>
                          <option value="en-US">English (US)</option>
                          <option value="es-ES">Español</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Moeda</label>
                        <select
                          value={moeda}
                          onChange={(e) => setMoeda(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="BRL">Real (R$)</option>
                          <option value="USD">Dólar ($)</option>
                          <option value="EUR">Euro (€)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Formato de Data</label>
                        <select
                          value={formatoData}
                          onChange={(e) => setFormatoData(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Notificações */}
            {activeTab === 'notificacoes' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Notificações</h2>
                
                <div className="space-y-6">
                  {/* Canais de Notificação */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Canais de Notificação</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-800">E-mail</p>
                            <p className="text-sm text-gray-500">Receber notificações por e-mail</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificacoes.email}
                            onChange={(e) => setNotificacoes({...notificacoes, email: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Smartphone className="h-5 w-5 text-gray-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-800">Push</p>
                            <p className="text-sm text-gray-500">Notificações no navegador</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificacoes.push}
                            onChange={(e) => setNotificacoes({...notificacoes, push: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Tipos de Notificação */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Tipos de Notificação</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'metas', nome: 'Progresso das Metas', desc: 'Alertas sobre o progresso das suas metas financeiras' },
                        { key: 'transacoes', nome: 'Transações', desc: 'Notificações sobre novas transações' },
                        { key: 'relatorios', nome: 'Relatórios', desc: 'Relatórios mensais e resumos financeiros' },
                        { key: 'marketing', nome: 'Marketing', desc: 'Novidades e promoções do MoneyMapp' }
                      ].map(item => (
                        <div key={item.key} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">{item.nome}</p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notificacoes[item.key]}
                              onChange={(e) => setNotificacoes({...notificacoes, [item.key]: e.target.checked})}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Dados */}
            {activeTab === 'dados' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Gerenciamento de Dados</h2>
                
                <div className="space-y-6">
                  {/* Exportar Dados */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Download className="h-5 w-5 text-gray-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-800">Exportar Dados</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Baixe uma cópia de todos os seus dados em formato JSON. Inclui transações, metas, 
                      configurações e histórico de relatórios.
                    </p>
                    <button
                      onClick={handleExportarDados}
                      className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Solicitar Exportação
                    </button>
                  </div>

                  {/* Excluir Conta */}
                  <div className="p-6 border border-red-200 rounded-lg bg-red-50">
                    <div className="flex items-center mb-4">
                      <Trash2 className="h-5 w-5 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-800">Zona de Perigo</h3>
                    </div>
                    <p className="text-red-700 mb-4">
                      Excluir sua conta removerá permanentemente todos os seus dados. Esta ação não pode ser desfeita.
                    </p>
                    <button
                      onClick={handleExcluirConta}
                      className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Excluir Conta
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-right text-sm text-gray-500">
        © 2024 MoneyMapp TCC. Todos os direitos reservados.
      </div>
    </div>
  )
}
