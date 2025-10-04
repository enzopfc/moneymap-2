import React, { useState } from 'react'
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts'
import { Calendar, TrendingUp, TrendingDown, BarChart3, PieChart as PieChartIcon, FileText, Download } from 'lucide-react'
import { formatarMoedaBRL } from '../utils/formatadores'
import { useDemo } from '../context/DemoContext'

const dadosRelatorios = {
  categorias: [
    { categoria: 'Alimentação', valor: 850, cor: '#3B82F6', percentual: 28.5 },
    { categoria: 'Transporte', valor: 620, cor: '#10B981', percentual: 20.8 },
    { categoria: 'Lazer', valor: 420, cor: '#F59E0B', percentual: 14.1 },
    { categoria: 'Saúde', valor: 380, cor: '#EF4444', percentual: 12.7 },
    { categoria: 'Educação', valor: 290, cor: '#8B5CF6', percentual: 9.7 },
    { categoria: 'Moradia', valor: 250, cor: '#06B6D4', percentual: 8.4 },
    { categoria: 'Outros', valor: 170, cor: '#F97316', percentual: 5.8 }
  ],
  
  evolucaoMensal: [
    { mes: 'Set/23', receitas: 4200, despesas: 2800, economia: 1400 },
    { mes: 'Out/23', receitas: 4500, despesas: 2950, economia: 1550 },
    { mes: 'Nov/23', receitas: 4800, despesas: 3100, economia: 1700 },
    { mes: 'Dez/23', receitas: 5200, despesas: 3400, economia: 1800 },
    { mes: 'Jan/24', receitas: 5920, despesas: 2980, economia: 2940 },
    { mes: 'Fev/24', receitas: 5100, despesas: 3200, economia: 1900 }
  ],

  comparativoAnual: [
    { ano: '2022', receitas: 48000, despesas: 42000, economia: 6000 },
    { ano: '2023', receitas: 58000, despesas: 45000, economia: 13000 },
    { ano: '2024', receitas: 24000, despesas: 18000, economia: 6000 } // Parcial até fevereiro
  ],

  tendencias: [
    { mes: 'Set', valor: 1400 },
    { mes: 'Out', valor: 1550 },
    { mes: 'Nov', valor: 1700 },
    { mes: 'Dez', valor: 1800 },
    { mes: 'Jan', valor: 2940 },
    { mes: 'Fev', valor: 1900 }
  ]
}

const CORES = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316']

function StatCard({ titulo, valor, subtitulo, icone: Icone, cor, trend }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${cor}`}>
          <Icone className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm ${trend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{titulo}</h3>
      <p className="text-2xl font-bold text-gray-800">{valor}</p>
      <p className="text-xs text-gray-500 mt-1">{subtitulo}</p>
    </div>
  )
}

function GraficoCategorias({ dados }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <PieChartIcon className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-800">Despesas por Categoria</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dados}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="valor"
              >
                {dados.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.cor} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatarMoedaBRL(value)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-3">
          {dados.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.cor }}
                />
                <span className="font-medium text-gray-700">{item.categoria}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{formatarMoedaBRL(item.valor)}</p>
                <p className="text-sm text-gray-500">{item.percentual}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GraficoEvolucao({ dados }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-6 h-6 text-emerald-600" />
        <h3 className="text-xl font-semibold text-gray-800">Evolução Mensal</h3>
      </div>
      
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value) => formatarMoedaBRL(value)} />
          <Legend />
          <Bar dataKey="receitas" fill="#10B981" name="Receitas" radius={[4, 4, 0, 0]} />
          <Bar dataKey="despesas" fill="#EF4444" name="Despesas" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function GraficoTendencias({ dados }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6 text-purple-600" />
        <h3 className="text-xl font-semibold text-gray-800">Tendência de Economia</h3>
      </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value) => formatarMoedaBRL(value)} />
          <Area
            type="monotone"
            dataKey="valor"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function Relatorios() {
  const [periodo, setPeriodo] = useState('6meses')
  const [tipoGrafico, setTipoGrafico] = useState('evolucao')
  const { modoDemo } = useDemo()

  const totalReceitas = dadosRelatorios.evolucaoMensal.reduce((sum, item) => sum + item.receitas, 0)
  const totalDespesas = dadosRelatorios.evolucaoMensal.reduce((sum, item) => sum + item.despesas, 0)
  const totalEconomia = totalReceitas - totalDespesas
  const mediaEconomia = totalEconomia / dadosRelatorios.evolucaoMensal.length

  const handleExportPDF = () => {
    alert('Relatório exportado em PDF!\n(Funcionalidade mockada para demonstração)')
  }

  return (
    <div className="h-full w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Relatórios Financeiros</h1>
          <p className="text-gray-600">Análise detalhada das suas finanças</p>
        </div>
        {modoDemo && (
          <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium">
            📊 Dados de Demonstração
          </div>
        )}
      </div>

      {/* Cards de estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          titulo="Total de Receitas"
          valor={formatarMoedaBRL(totalReceitas)}
          subtitulo="últimos 6 meses"
          icone={TrendingUp}
          cor="from-emerald-500 to-emerald-600"
          trend={12}
        />
        <StatCard
          titulo="Total de Despesas"
          valor={formatarMoedaBRL(totalDespesas)}
          subtitulo="últimos 6 meses"
          icone={TrendingDown}
          cor="from-red-500 to-red-600"
          trend={-8}
        />
        <StatCard
          titulo="Economia Total"
          valor={formatarMoedaBRL(totalEconomia)}
          subtitulo="receitas - despesas"
          icone={BarChart3}
          cor="from-blue-500 to-blue-600"
          trend={25}
        />
        <StatCard
          titulo="Média Mensal"
          valor={formatarMoedaBRL(mediaEconomia)}
          subtitulo="economia por mês"
          icone={Calendar}
          cor="from-purple-500 to-purple-600"
          trend={15}
        />
      </div>

      {/* Controles */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Filtros e Ações</h3>
          <button
            onClick={handleExportPDF}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Período</label>
            <select
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="3meses">Últimos 3 meses</option>
              <option value="6meses">Últimos 6 meses</option>
              <option value="12meses">Últimos 12 meses</option>
              <option value="ano">Este ano</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Relatório</label>
            <select
              value={tipoGrafico}
              onChange={(e) => setTipoGrafico(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="evolucao">Evolução Temporal</option>
              <option value="categorias">Por Categorias</option>
              <option value="comparativo">Comparativo Anual</option>
              <option value="tendencias">Tendências</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Formato</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option value="mensal">Agrupamento Mensal</option>
              <option value="semanal">Agrupamento Semanal</option>
              <option value="diario">Visão Diária</option>
            </select>
          </div>
        </div>
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GraficoCategorias dados={dadosRelatorios.categorias} />
        <GraficoEvolucao dados={dadosRelatorios.evolucaoMensal} />
      </div>

      {/* Gráfico de tendências */}
      <GraficoTendencias dados={dadosRelatorios.tendencias} />

      {/* Resumo detalhado */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Resumo Executivo</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Maior Categoria de Gasto</h4>
            <p className="text-2xl font-bold text-blue-600">Alimentação</p>
            <p className="text-sm text-gray-600">R$ 850,00 (28.5% do total)</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Melhor Mês</h4>
            <p className="text-2xl font-bold text-emerald-600">Janeiro/24</p>
            <p className="text-sm text-gray-600">Economia de R$ 2.940,00</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Taxa de Economia</h4>
            <p className="text-2xl font-bold text-purple-600">{((totalEconomia / totalReceitas) * 100).toFixed(1)}%</p>
            <p className="text-sm text-gray-600">Das receitas totais</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white/60 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">🎯 Insights & Recomendações</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Seus gastos com alimentação estão acima da média recomendada (25%)</li>
            <li>• Excelente performance em janeiro - mantenha o foco!</li>
            <li>• Considere renegociar contratos de serviços fixos</li>
            <li>• Sua taxa de economia está muito boa, continue assim!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
