import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { TrendingUp, TrendingDown, DollarSign, Target, CreditCard, Activity } from 'lucide-react'
import CardResumo from '../components/CardResumo'
import GraficoBarra from '../components/GraficoBarra'
import api from '../services/api'
import { anoMesAtual, formatarMoedaBRL } from '../utils/formatadores'
import Alerta from '../components/Alerta'
import { useDemo } from '../context/DemoContext'

const CORES_GRAFICO = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4']

function CardEstatistica({ icone: Icone, titulo, valor, subtexto, cor = 'blue', trend }) {
  return (
    <div className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${
          cor === 'blue' ? 'from-blue-500 to-blue-600' :
          cor === 'green' ? 'from-emerald-500 to-emerald-600' :
          cor === 'red' ? 'from-red-500 to-red-600' :
          'from-purple-500 to-purple-600'
        }`}>
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
      <p className="text-xs text-gray-500 mt-1">{subtexto}</p>
    </div>
  )
}

function GraficoCategoria({ dados }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Gastos por Categoria</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dados}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="valor"
          >
            {dados.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={CORES_GRAFICO[index % CORES_GRAFICO.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatarMoedaBRL(value)} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

function GraficoMensal({ dados }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Receitas x Despesas (3 meses)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value) => formatarMoedaBRL(value)} />
          <Legend />
          <Bar dataKey="receitas" fill="#10B981" name="Receitas" />
          <Bar dataKey="despesas" fill="#EF4444" name="Despesas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function Dashboard() {
  const [resumo, setResumo] = useState(null)
  const [mensal, setMensal] = useState([])
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(true)
  const { modoDemo, dadosDemo } = useDemo()

  async function carregar() {
    try {
      setCarregando(true)
      setErro('')

      if (modoDemo) {
        // Usar dados demo
        setResumo(dadosDemo.resumo)
        setMensal(dadosDemo.relatoriosMensal)
      } else {
        // Usar API real
        const mes = anoMesAtual()
        const [r1, r2] = await Promise.all([
          api.relatorios.resumo(mes), 
          api.relatorios.mensal(3)
        ])
        setResumo(r1.data)
        setMensal(r2.data || [])
      }
    } catch (ex) {
      setErro(ex?.response?.data?.mensagem || 'Falha ao carregar o dashboard.')
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregar()
  }, [modoDemo])

  if (carregando) {
    return (
      <div className="space-y-6">
        <h1 className="titulo-secao">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h1 className="titulo-secao">Dashboard</h1>
        {modoDemo && (
          <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium">
            🎯 Modo Demonstração Ativo
          </div>
        )}
      </div>

      {erro && <Alerta tipo="erro" mensagem={erro} />}

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <CardEstatistica
          icone={DollarSign}
          titulo="Saldo Total"
          valor={formatarMoedaBRL(resumo?.saldo || 0)}
          subtexto="saldo acumulado"
          cor="blue"
          trend={15}
        />
        <CardEstatistica
          icone={TrendingUp}
          titulo="Receitas do Mês"
          valor={formatarMoedaBRL(resumo?.receitasMes || 0)}
          subtexto="janeiro 2024"
          cor="green"
          trend={8}
        />
        <CardEstatistica
          icone={TrendingDown}
          titulo="Despesas do Mês"
          valor={formatarMoedaBRL(resumo?.despesasMes || 0)}
          subtexto="janeiro 2024"
          cor="red"
          trend={-12}
        />
        <CardEstatistica
          icone={Target}
          titulo="Economia do Mês"
          valor={formatarMoedaBRL((resumo?.receitasMes || 0) - (resumo?.despesasMes || 0))}
          subtexto="receitas - despesas"
          cor="purple"
          trend={23}
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modoDemo && (
          <GraficoCategoria dados={dadosDemo.relatoriosCategorias} />
        )}
        <GraficoMensal dados={mensal} />
      </div>

      {/* Transações recentes */}
      {modoDemo && (
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Transações Recentes</h3>
          <div className="space-y-3">
            {dadosDemo.transacoes.slice(-5).reverse().map((transacao) => (
              <div key={transacao.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transacao.tipo === 'receita' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {transacao.tipo === 'receita' ? '+' : '-'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{transacao.descricao}</p>
                    <p className="text-sm text-gray-600">{transacao.categoria}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${transacao.tipo === 'receita' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {transacao.tipo === 'receita' ? '+' : '-'} {formatarMoedaBRL(transacao.valor)}
                  </p>
                  <p className="text-sm text-gray-500">{new Date(transacao.data).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
