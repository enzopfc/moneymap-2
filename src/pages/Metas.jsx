import React, { useState } from 'react'
import { Target, Plus, Calendar, TrendingUp, CheckCircle, DollarSign, Edit, Trash2 } from 'lucide-react'
import { formatarMoedaBRL } from '../utils/formatadores'
import { useDemo } from '../context/DemoContext'

const metasMockadas = [
  {
    id: 1,
    titulo: 'Comprar Notebook',
    descricao: 'Notebook para trabalho e estudos',
    valor_meta: 3000,
    valor_atual: 1850,
    prazo: '2024-06-30',
    categoria: 'Tecnologia',
    cor: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    titulo: 'Viagem de Férias',
    descricao: 'Viagem para o Nordeste nas férias',
    valor_meta: 2500,
    valor_atual: 980,
    prazo: '2024-12-20',
    categoria: 'Lazer',
    cor: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    titulo: 'Reserva de Emergência',
    descricao: '6 meses de gastos essenciais',
    valor_meta: 10000,
    valor_atual: 7200,
    prazo: '2024-08-15',
    categoria: 'Segurança',
    cor: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 4,
    titulo: 'Curso de Inglês',
    descricao: 'Curso completo de inglês avançado',
    valor_meta: 1200,
    valor_atual: 1200,
    prazo: '2024-03-30',
    categoria: 'Educação',
    cor: 'from-orange-500 to-orange-600'
  },
  {
    id: 5,
    titulo: 'Carro Usado',
    descricao: 'Entrada para financiamento do carro',
    valor_meta: 15000,
    valor_atual: 5400,
    prazo: '2024-10-15',
    categoria: 'Transporte',
    cor: 'from-red-500 to-red-600'
  }
]

function MetaCard({ meta, onEdit, onDelete, onAddValue }) {
  const progresso = Math.min(100, (meta.valor_atual / meta.valor_meta) * 100)
  const concluida = progresso >= 100
  const restante = meta.valor_meta - meta.valor_atual
  const diasRestantes = Math.ceil((new Date(meta.prazo) - new Date()) / (1000 * 60 * 60 * 24))

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${meta.cor} rounded-xl flex items-center justify-center`}>
            {concluida ? (
              <CheckCircle className="w-6 h-6 text-white" />
            ) : (
              <Target className="w-6 h-6 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{meta.titulo}</h3>
            <p className="text-sm text-gray-600">{meta.descricao}</p>
          </div>
        </div>
        
        {concluida && (
          <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
            ✓ Concluída
          </div>
        )}
      </div>

      {/* Progresso */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progresso</span>
          <span className="text-sm font-bold text-gray-800">{progresso.toFixed(1)}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${meta.cor} transition-all duration-500 ease-out`}
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      {/* Valores */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Valor Atual</p>
          <p className="text-lg font-bold text-gray-800">{formatarMoedaBRL(meta.valor_atual)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Meta</p>
          <p className="text-lg font-bold text-gray-800">{formatarMoedaBRL(meta.valor_meta)}</p>
        </div>
      </div>

      {/* Info adicional */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{diasRestantes > 0 ? `${diasRestantes} dias restantes` : 'Prazo vencido'}</span>
        </div>
        {!concluida && (
          <div className="flex items-center gap-2 text-orange-600">
            <DollarSign className="w-4 h-4" />
            <span>Faltam {formatarMoedaBRL(restante)}</span>
          </div>
        )}
      </div>

      {/* Ações */}
      <div className="flex gap-2">
        {!concluida && (
          <>
            <button
              onClick={() => onAddValue(meta, 100)}
              className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
            >
              + R$ 100
            </button>
            <button
              onClick={() => onAddValue(meta, 500)}
              className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
            >
              + R$ 500
            </button>
          </>
        )}
        
        <button
          onClick={() => onEdit(meta)}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          title="Editar"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(meta)}
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Excluir"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default function Metas() {
  const [metas, setMetas] = useState(metasMockadas)
  const { modoDemo } = useDemo()

  const metasConcluidas = metas.filter(m => (m.valor_atual / m.valor_meta) >= 1).length
  const metasEmAndamento = metas.length - metasConcluidas
  const valorTotalMetas = metas.reduce((sum, m) => sum + m.valor_meta, 0)
  const valorTotalEconomizado = metas.reduce((sum, m) => sum + m.valor_atual, 0)

  const handleEdit = (meta) => {
    alert(`Editando meta: ${meta.titulo}\n(Funcionalidade mockada para demonstração)`)
  }

  const handleDelete = (meta) => {
    if (confirm(`Deseja excluir a meta "${meta.titulo}"?`)) {
      alert('Meta excluída!\n(Funcionalidade mockada para demonstração)')
    }
  }

  const handleAddValue = (meta, valor) => {
    alert(`Adicionado ${formatarMoedaBRL(valor)} à meta "${meta.titulo}"!\n(Funcionalidade mockada para demonstração)`)
  }

  const handleAddNew = () => {
    alert('Nova meta criada!\n(Funcionalidade mockada para demonstração)')
  }

  return (
    <div className="h-full w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Metas Financeiras</h1>
          <p className="text-gray-600">Defina e acompanhe seus objetivos financeiros</p>
        </div>
        {modoDemo && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
            🎯 Dados de Demonstração
          </div>
        )}
      </div>

      {/* Cards de estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-8 h-8" />
            <h3 className="text-lg font-semibold">Total de Metas</h3>
          </div>
          <p className="text-3xl font-bold">{metas.length}</p>
          <p className="text-blue-100 text-sm">Objetivos definidos</p>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-8 h-8" />
            <h3 className="text-lg font-semibold">Concluídas</h3>
          </div>
          <p className="text-3xl font-bold">{metasConcluidas}</p>
          <p className="text-emerald-100 text-sm">Metas atingidas</p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8" />
            <h3 className="text-lg font-semibold">Em Andamento</h3>
          </div>
          <p className="text-3xl font-bold">{metasEmAndamento}</p>
          <p className="text-orange-100 text-sm">Metas ativas</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-8 h-8" />
            <h3 className="text-lg font-semibold">Progresso</h3>
          </div>
          <p className="text-3xl font-bold">{((valorTotalEconomizado / valorTotalMetas) * 100).toFixed(0)}%</p>
          <p className="text-purple-100 text-sm">Do total planejado</p>
        </div>
      </div>

      {/* Botão nova meta */}
      <div className="flex justify-end">
        <button
          onClick={handleAddNew}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Nova Meta
        </button>
      </div>

      {/* Grid de metas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {metas.map(meta => (
          <MetaCard
            key={meta.id}
            meta={meta}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAddValue={handleAddValue}
          />
        ))}
      </div>

      {/* Resumo total */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Resumo Geral</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Total Planejado</p>
            <p className="text-2xl font-bold text-gray-800">{formatarMoedaBRL(valorTotalMetas)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Total Economizado</p>
            <p className="text-2xl font-bold text-emerald-600">{formatarMoedaBRL(valorTotalEconomizado)}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${(valorTotalEconomizado / valorTotalMetas) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
