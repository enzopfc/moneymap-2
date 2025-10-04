import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  DollarSign,
  TrendingUp,
  Target,
  BarChart3,
  BookOpen,
  Shield,
  Star,
  ChevronRight,
  Users,
  Award,
  Zap,
  Heart
} from 'lucide-react'

const funcionalidades = [
  {
    icone: DollarSign,
    titulo: 'Controle Financeiro',
    descricao: 'Gerencie suas receitas e despesas com facilidade. Categorize transações e acompanhe seu fluxo de caixa em tempo real.',
    cor: 'from-blue-500 to-blue-600'
  },
  {
    icone: Target,
    titulo: 'Metas Inteligentes',
    descricao: 'Defina objetivos financeiros realistas e acompanhe seu progresso. Alcance seus sonhos com planejamento estruturado.',
    cor: 'from-emerald-500 to-emerald-600'
  },
  {
    icone: BarChart3,
    titulo: 'Relatórios Detalhados',
    descricao: 'Visualize gráficos interativos e relatórios completos sobre sua situação financeira. Dados que realmente importam.',
    cor: 'from-purple-500 to-purple-600'
  },
  {
    icone: BookOpen,
    titulo: 'Educação Financeira',
    descricao: 'Aprenda conceitos fundamentais de finanças pessoais com conteúdo curado e dicas práticas para seu dia a dia.',
    cor: 'from-orange-500 to-orange-600'
  }
]

const avaliacoes = [
  {
    nome: 'Ana Silva',
    cargo: 'Estudante de Administração',
    foto: '👩‍💼',
    estrelas: 5,
    comentario: 'O MoneyMapp transformou completamente minha relação com o dinheiro! Consegui organizar minhas finanças e já estou economizando para meu intercâmbio.',
    destaque: 'Organização financeira'
  },
  {
    nome: 'Carlos Mendes',
    cargo: 'Desenvolvedor',
    foto: '👨‍💻',
    estrelas: 5,
    comentario: 'Plataforma incrível! Os relatórios são muito claros e me ajudaram a identificar gastos desnecessários. Recomendo para todos os meus amigos.',
    destaque: 'Relatórios claros'
  },
  {
    nome: 'Maria Oliveira',
    cargo: 'Professora',
    foto: '👩‍🏫',
    estrelas: 5,
    comentario: 'A seção de educação financeira é fantástica. Aprendi muito sobre investimentos e já comecei a aplicar os conhecimentos na prática.',
    destaque: 'Educação financeira'
  }
]

function CardFuncionalidade({ item }) {
  const Icone = item.icone
  
  return (
    <div className="group card p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className={`bg-gradient-to-r ${item.cor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icone className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {item.titulo}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {item.descricao}
      </p>
    </div>
  )
}

function CardAvaliacao({ avaliacao }) {
  return (
    <div className="card p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">{avaliacao.foto}</div>
        <div>
          <h4 className="font-semibold text-gray-800">{avaliacao.nome}</h4>
          <p className="text-sm text-gray-600">{avaliacao.cargo}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(avaliacao.estrelas)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-3 italic">"{avaliacao.comentario}"</p>
      <div className="bg-blue-50 px-3 py-1 rounded-full inline-block">
        <span className="text-sm text-blue-700 font-medium">✨ {avaliacao.destaque}</span>
      </div>
    </div>
  )
}

export default function Home() {
  const navegar = useNavigate()

  function irParaDashboard() {
    navegar('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <DollarSign className="w-16 h-16 text-white" />
              <h1 className="text-5xl font-bold">MoneyMapp TCC</h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
              Sua plataforma de educação financeira
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Controle suas finanças, defina metas inteligentes e aprenda sobre investimentos. 
              Tudo em um só lugar, de forma simples e intuitiva.
            </p>
            
            <button
              onClick={irParaDashboard}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform inline-flex items-center gap-2"
            >
              Acessar demonstração
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O que fazemos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos ferramentas completas para você ter controle total sobre suas finanças pessoais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {funcionalidades.map((item, index) => (
              <CardFuncionalidade key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Por que escolher o MoneyMapp?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra as vantagens que fazem do MoneyMapp a melhor escolha para suas finanças
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Interface Simples</h3>
              <p className="text-gray-600">Design intuitivo e fácil de usar, mesmo para iniciantes em tecnologia.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Relatórios Visuais</h3>
              <p className="text-gray-600">Gráficos interativos que transformam seus dados em insights valiosos.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Metas Claras</h3>
              <p className="text-gray-600">Defina objetivos realistas e acompanhe seu progresso automaticamente.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Segurança Total</h3>
              <p className="text-gray-600">Seus dados são protegidos com a mais alta tecnologia de segurança.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Educação Gratuita</h3>
              <p className="text-gray-600">Conteúdo educativo completo para melhorar sua educação financeira.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Suporte Dedicado</h3>
              <p className="text-gray-600">Equipe pronta para ajudar você a alcançar seus objetivos financeiros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <h2 className="text-4xl font-bold text-gray-800">Avaliações dos usuários</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos usuários estão dizendo sobre o MoneyMapp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {avaliacoes.map((avaliacao, index) => (
              <CardAvaliacao key={index} avaliacao={avaliacao} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nós */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-800">Sobre nós</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O <strong>MoneyMapp TCC</strong> é um projeto de conclusão de curso desenvolvido com o objetivo de 
                democratizar a educação financeira no Brasil. Nossa missão é fornecer ferramentas acessíveis 
                e intuitivas para que qualquer pessoa possa ter controle total sobre suas finanças pessoais.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Acessível</h4>
                  <p className="text-sm text-gray-600">Para todos os níveis de conhecimento financeiro</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Intuitivo</h4>
                  <p className="text-sm text-gray-600">Interface simples e fácil de usar</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Confiável</h4>
                  <p className="text-sm text-gray-600">Dados seguros e proteção total da privacidade</p>
                </div>
              </div>
              
              <p className="text-gray-600">
                Desenvolvido com React, Vite e Tailwind CSS, o MoneyMapp representa o futuro da gestão financeira pessoal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para transformar suas finanças?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Comece agora mesmo a usar o MoneyMapp e descubra como é fácil ter controle total sobre seu dinheiro.
          </p>
          <button
            onClick={irParaDashboard}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform inline-flex items-center gap-2"
          >
            Entrar em demonstração
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="w-6 h-6" />
            <span className="font-semibold">MoneyMapp TCC</span>
          </div>
          <p className="text-sm">
            © 2024 MoneyMapp TCC. Projeto de conclusão de curso. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}