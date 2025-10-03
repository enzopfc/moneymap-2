import React, { useState } from 'react'
import { Plus, Search, Filter, Edit, Trash2, TrendingUp, TrendingDown, Calendar, Tag } from 'lucide-react'
import { formatarMoedaBRL } from '../utils/formatadores'
import { useDemo } from '../context/DemoContext'

const transacoesMockadas = [
  { id: 1, data: '2024-01-28', tipo: 'receita', categoria: 'Salário', descricao: 'Salário Janeiro', valor: 5000, status: 'confirmada' },
  { id: 2, data: '2024-01-27', tipo: 'despesa', categoria: 'Alimentação', descricao: 'Supermercado BigMart', valor: 285, status: 'confirmada' },
  { id: 3, data: '2024-01-26', tipo: 'despesa', categoria: 'Transporte', descricao: 'Combustível', valor: 120, status: 'confirmada' },
  { id: 4, data: '2024-01-25', tipo: 'receita', categoria: 'Freelance', descricao: 'Projeto Website', valor: 800, status: 'confirmada' },
  { id: 5, data: '2024-01-24', tipo: 'despesa', categoria: 'Lazer', descricao: 'Cinema Shopping', valor: 45, status: 'confirmada' },
  { id: 6, data: '2024-01-23', tipo: 'despesa', categoria: 'Saúde', descricao: 'Farmácia Popular', valor: 67, status: 'pendente' },
  { id: 7, data: '2024-01-22', tipo: 'receita', categoria: 'Investimentos', descricao: 'Dividendos FII', valor: 150, status: 'confirmada' },
  { id: 8, data: '2024-01-21', tipo: 'despesa', categoria: 'Educação', descricao: 'Curso Udemy', valor: 89, status: 'confirmada' },
  { id: 9, data: '2024-01-20', tipo: 'despesa', categoria: 'Moradia', descricao: 'Conta de Luz', valor: 134, status: 'confirmada' },
  { id: 10, data: '2024-01-19', tipo: 'receita', categoria: 'Vendas', descricao: 'Venda Online', valor: 320, status: 'confirmada' },
]

const categorias = ['Todas', 'Salário', 'Freelance', 'Investimentos', 'Vendas', 'Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Educação', 'Moradia']

function TransactionCard({ transacao, onEdit, onDelete }) {
  const isReceita = transacao.tipo === 'receita'
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isReceita ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
          }`}>
            {isReceita ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{transacao.descricao}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Tag className="w-3 h-3" />
              <span>{transacao.categoria}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-bold text-lg ${isReceita ? 'text-emerald-600' : 'text-red-600'}`}>
            {isReceita ? '+' : '-'} {formatarMoedaBRL(transacao.valor)}
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{new Date(transacao.data).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          transacao.status === 'confirmada' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {transacao.status === 'confirmada' ? 'Confirmada' : 'Pendente'}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(transacao)}
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Editar"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(transacao)}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Excluir"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Transacoes() {
  const [transacoes] = useState(transacoesMockadas)
  const [filtroCategoria, setFiltroCategoria] = useState('Todas')
  const [filtroTipo, setFiltroTipo] = useState('todos')
  const [busca, setBusca] = useState('')
  const { modoDemo } = useDemo()

  const transacoesFiltradas = transacoes.filter(t => {
    const matchCategoria = filtroCategoria === 'Todas' || t.categoria === filtroCategoria
    const matchTipo = filtroTipo === 'todos' || t.tipo === filtroTipo
    const matchBusca = t.descricao.toLowerCase().includes(busca.toLowerCase()) || 
                      t.categoria.toLowerCase().includes(busca.toLowerCase())
    
    return matchCategoria && matchTipo && matchBusca
  })

  const totalReceitas = transacoesFiltradas
    .filter(t => t.tipo === 'receita')
    .reduce((sum, t) => sum + t.valor, 0)

  const totalDespesas = transacoesFiltradas
    .filter(t => t.tipo === 'despesa')
    .reduce((sum, t) => sum + t.valor, 0)

  const saldo = totalReceitas - totalDespesas

  const handleEdit = (transacao) => {
    alert(`Editando: ${transacao.descricao}\n(Funcionalidade mockada para demonstração)`)
  }

  const handleDelete = (transacao) => {
    if (confirm(`Deseja excluir a transação "${transacao.descricao}"?`)) {
      alert('Transação excluída!\n(Funcionalidade mockada para demonstração)')
    }
  }

  const handleAddNew = () => {
    alert('Nova transação criada!\n(Funcionalidade mockada para demonstração)')
  }

  return (
    <div className="h-full w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Transações</h1>
          <p className="text-gray-600">Gerencie suas receitas e despesas</p>
        </div>
        {modoDemo && (
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
            📊 Dados de Demonstração
          </div>
        )}
      </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8" />
            <h3 className="text-xl font-semibold">Total Receitas</h3>
          </div>
          <p className="text-3xl font-bold">{formatarMoedaBRL(totalReceitas)}</p>
          <p className="text-emerald-100 text-sm">Este mês</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="w-8 h-8" />
            <h3 className="text-xl font-semibold">Total Despesas</h3>
          </div>
          <p className="text-3xl font-bold">{formatarMoedaBRL(totalDespesas)}</p>
          <p className="text-red-100 text-sm">Este mês</p>
        </div>

        <div className={`bg-gradient-to-r ${saldo >= 0 ? 'from-blue-500 to-blue-600' : 'from-orange-500 to-orange-600'} rounded-2xl p-6 text-white`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">₹</span>
            </div>
            <h3 className="text-xl font-semibold">Saldo</h3>
          </div>
          <p className="text-3xl font-bold">{formatarMoedaBRL(saldo)}</p>
          <p className="text-white/80 text-sm">Receitas - Despesas</p>
        </div>
      </div>

      {/* Filtros e busca */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-4 mb-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar transações..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          >
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          >
            <option value="todos">Todos os tipos</option>
            <option value="receita">Receitas</option>
            <option value="despesa">Despesas</option>
          </select>

          <button
            onClick={handleAddNew}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Nova Transação
          </button>
        </div>
      </div>

      {/* Lista de transações */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Transações Recentes ({transacoesFiltradas.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {transacoesFiltradas.map(transacao => (
            <TransactionCard
              key={transacao.id}
              transacao={transacao}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {transacoesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma transação encontrada</h3>
            <p className="text-gray-500">Tente ajustar os filtros ou adicionar uma nova transação.</p>
          </div>
        )}
      </div>
    </div>
  )
}
