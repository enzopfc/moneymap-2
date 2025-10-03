import React from 'react'
import { 
  PiggyBank, 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Target,
  Calculator,
  Lightbulb,
  DollarSign,
  BookOpen,
  Award
} from 'lucide-react'

const conteudoEducativo = [
  {
    id: 1,
    titulo: 'Orçamento Pessoal - Regra 50/30/20',
    descricao: 'Organize suas finanças dividindo sua renda: 50% para necessidades básicas, 30% para desejos pessoais e 20% para poupança e investimentos.',
    icone: Calculator,
    cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
    detalhes: [
      '50% - Necessidades: aluguel, alimentação, transporte',
      '30% - Desejos: lazer, roupas, restaurantes',
      '20% - Poupança: reserva de emergência e investimentos'
    ]
  },
  {
    id: 2,
    titulo: 'Controle de Dívidas',
    descricao: 'Evite juros altos e quite dívidas estrategicamente. Priorize sempre as dívidas com maiores taxas de juros.',
    icone: CreditCard,
    cor: 'bg-gradient-to-br from-red-500 to-red-600',
    detalhes: [
      'Liste todas as dívidas com suas taxas de juros',
      'Priorize o pagamento das dívidas mais caras',
      'Negocie condições melhores quando possível',
      'Evite pagar apenas o valor mínimo do cartão'
    ]
  },
  {
    id: 3,
    titulo: 'Reserva de Emergência',
    descricao: 'Mantenha de 3 a 6 meses de gastos essenciais guardados para imprevistos como desemprego, doença ou emergências.',
    icone: Shield,
    cor: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    detalhes: [
      'Calcule seus gastos mensais essenciais',
      'Multiplique por 3-6 meses para sua meta',
      'Mantenha em investimento líquido e seguro',
      'Use apenas em verdadeiras emergências'
    ]
  },
  {
    id: 4,
    titulo: 'Investimentos Básicos',
    descricao: 'Conheça opções seguras como poupança, Tesouro Direto e CDB para fazer seu dinheiro render mais que a inflação.',
    icone: TrendingUp,
    cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
    detalhes: [
      'Poupança: baixo rendimento, alta liquidez',
      'Tesouro Direto: títulos públicos, várias opções',
      'CDB: títulos privados, verificar garantia do FGC',
      'Diversifique entre diferentes investimentos'
    ]
  },
  {
    id: 5,
    titulo: 'Definindo Metas Financeiras',
    descricao: 'Estabeleça objetivos claros e prazos realistas para suas conquistas financeiras, como viagem, casa própria ou aposentadoria.',
    icone: Target,
    cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
    detalhes: [
      'Defina metas específicas e mensuráveis',
      'Estabeleça prazos realistas',
      'Divida grandes objetivos em etapas menores',
      'Acompanhe o progresso regularmente'
    ]
  },
  {
    id: 6,
    titulo: 'Dicas de Economia no Dia a Dia',
    descricao: 'Pequenos hábitos que fazem grande diferença: planeje suas compras, compare preços e evite gastos impulsivos.',
    icone: Lightbulb,
    cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    detalhes: [
      'Faça uma lista antes de ir às compras',
      'Compare preços em diferentes estabelecimentos',
      'Evite compras por impulso - espere 24h',
      'Aproveite promoções reais, não marketing'
    ]
  }
]

function CardEducativo({ item }) {
  const Icone = item.icone
  
  return (
    <div className="group card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className={`${item.cor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icone className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {item.titulo}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {item.descricao}
      </p>
      
      <div className="space-y-2">
        {item.detalhes.map((detalhe, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <p className="text-sm text-gray-700">{detalhe}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Educacao() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="w-10 h-10 text-blue-600" />
          <h1 className="titulo-secao">Educação Financeira</h1>
        </div>
        <p className="subtitulo-secao max-w-2xl mx-auto">
          Aprenda conceitos fundamentais para organizar suas finanças, 
          controlar gastos e construir um futuro financeiro mais seguro.
        </p>
      </div>

      {/* Estatísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6 text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-blue-800">6</h3>
          <p className="text-blue-600 font-medium">Tópicos Essenciais</p>
        </div>
        
        <div className="card p-6 text-center bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <PiggyBank className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-emerald-800">50/30/20</h3>
          <p className="text-emerald-600 font-medium">Regra de Ouro</p>
        </div>
        
        <div className="card p-6 text-center bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-purple-800">3-6</h3>
          <p className="text-purple-600 font-medium">Meses de Reserva</p>
        </div>
      </div>

      {/* Grid de conteúdo educativo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conteudoEducativo.map((item) => (
          <CardEducativo key={item.id} item={item} />
        ))}
      </div>

      {/* Call to action */}
      <div className="card p-8 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white mt-8">
        <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Use o MoneyMapp para colocar em prática tudo que você aprendeu. 
          Controle suas transações, defina metas e acompanhe seu progresso financeiro.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Ir para Dashboard
        </button>
      </div>
    </div>
  )
}
