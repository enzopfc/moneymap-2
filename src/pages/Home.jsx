import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ChevronRight, 
  PiggyBank, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Shield, 
  Zap, 
  Users, 
  Star,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  const [carregandoDemo, setCarregandoDemo] = useState(false)

  const handleDemoAccess = async () => {
    setCarregandoDemo(true)
    // Simula loading para melhor UX
    setTimeout(() => {
      localStorage.setItem('demoMode', 'true')
      navigate('/dashboard')
      setCarregandoDemo(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <PiggyBank className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">MoneyMapp</span>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="px-6 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Fazer Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              MoneyMapp TCC
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              Sua plataforma de educação financeira
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Controle suas finanças, defina metas e aprenda a investir com nossa plataforma 
              desenvolvida especialmente para estudantes e jovens profissionais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDemoAccess}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Entrar em demonstração
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => navigate('/login')}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Fazer login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            O que fazemos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Controle de Finanças</h4>
              <p className="text-gray-600">
                Monitore suas receitas e despesas de forma simples e intuitiva
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Metas Financeiras</h4>
              <p className="text-gray-600">
                Defina e acompanhe suas metas de economia e investimentos
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Relatórios Visuais</h4>
              <p className="text-gray-600">
                Gráficos detalhados para entender seus padrões de gastos
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Educação Financeira</h4>
              <p className="text-gray-600">
                Aprenda sobre investimentos, orçamento e planejamento financeiro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Por que escolher o MoneyMapp?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Simplicidade</h4>
              <p className="text-gray-600">
                Interface intuitiva e fácil de usar, perfeita para iniciantes em finanças pessoais.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Relatórios Visuais</h4>
              <p className="text-gray-600">
                Gráficos e dashboards que tornam seus dados financeiros fáceis de entender.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Metas Claras</h4>
              <p className="text-gray-600">
                Sistema de metas que te ajuda a focar no que realmente importa financeiramente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            O que nossos usuários dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "O MoneyMapp transformou a forma como gerencio meu dinheiro. Agora consigo 
                economizar e planejar meus investimentos com muito mais clareza!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Maria Silva</p>
                  <p className="text-sm text-gray-600">Estudante de Administração</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finalmente uma plataforma que explica finanças de forma simples! 
                Os relatórios visuais me ajudaram muito a entender meus gastos."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  J
                </div>
                <div className="ml-3">
                  <p className="font-semibold">João Santos</p>
                  <p className="text-sm text-gray-600">Jovem Profissional</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As metas do MoneyMapp me motivaram a economizar para minha primeira casa. 
                Sistema prático e motivador!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Ana Costa</p>
                  <p className="text-sm text-gray-600">Recém-formada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Sobre Nós</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8 opacity-90">
              O MoneyMapp foi desenvolvido como projeto de TCC com o objetivo de democratizar 
              a educação financeira entre jovens brasileiros. Nossa missão é tornar o 
              planejamento financeiro acessível, simples e eficaz.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h4 className="text-xl font-semibold mb-2">Nossa Missão</h4>
                <p className="opacity-80">
                  Capacitar jovens com conhecimento financeiro prático e ferramentas 
                  eficazes para construir um futuro próspero.
                </p>
              </div>
              
              <div>
                <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h4 className="text-xl font-semibold mb-2">Nossos Valores</h4>
                <p className="opacity-80">
                  Transparência, simplicidade e educação de qualidade são os pilares 
                  que guiam o desenvolvimento do MoneyMapp.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <button 
                onClick={handleDemoAccess}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              >
                Comece agora mesmo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <PiggyBank className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">MoneyMapp</span>
          </div>
          <p className="text-gray-400">
            © 2024 MoneyMapp TCC. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}