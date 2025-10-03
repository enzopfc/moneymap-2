import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  CreditCard, 
  Target, 
  BarChart3, 
  BookOpen, 
  Settings,
  X,
  ChevronRight
} from 'lucide-react'

const itens = [
  { to: '/dashboard', rotulo: 'Dashboard', icone: LayoutDashboard },
  { to: '/transactions', rotulo: 'Transações', icone: CreditCard },
  { to: '/goals', rotulo: 'Metas', icone: Target },
  { to: '/reports', rotulo: 'Relatórios', icone: BarChart3 },
  { to: '/education', rotulo: 'Educação', icone: BookOpen },
  { to: '/settings', rotulo: 'Configurações', icone: Settings },
]

export default function Sidebar({ aberto, onFechar }) {
  const [expandido, setExpandido] = useState(false)

  return (
    <>
      {/* Overlay para mobile */}
      {aberto && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onFechar}
        />
      )}
      
      {/* Sidebar Desktop Colapsável */}
      <aside 
        className={`
          hidden md:block fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-2xl z-50
          transition-all duration-300 ease-in-out border-r border-gray-200
          ${expandido ? 'w-64' : 'w-20'}
        `}
        onMouseEnter={() => setExpandido(true)}
        onMouseLeave={() => setExpandido(false)}
      >
        {/* Navegação Desktop */}
        <nav className="p-4">
          <ul className="space-y-2">
            {itens.map((item) => {
              const Icone = item.icone
              return (
                <li key={item.to}>
                  <NavLink 
                    to={item.to} 
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                      relative group overflow-hidden
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-105 hover:shadow-md'
                      }
                    `}
                  >
                    <Icone className={`w-6 h-6 transition-transform duration-300 ${expandido ? 'scale-100' : 'scale-110'}`} />
                    <span className={`
                      font-medium transition-all duration-300 whitespace-nowrap
                      ${expandido ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                    `}>
                      {item.rotulo}
                    </span>
                    
                    {/* Tooltip para modo colapsado */}
                    {!expandido && (
                      <div className="
                        absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200
                        pointer-events-none whitespace-nowrap z-50
                      ">
                        {item.rotulo}
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {/* Indicador de expansão */}
        <div className={`
          absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-gray-200 
          rounded-full flex items-center justify-center transition-all duration-300
          ${expandido ? 'rotate-180' : 'rotate-0'}
        `}>
          <ChevronRight className="w-3 h-3 text-gray-400" />
        </div>
      </aside>
      
      {/* Sidebar Mobile */}
      <aside className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        md:hidden
        ${aberto ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header móvel */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-gray-800">Menu</span>
          <button 
            onClick={onFechar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Navegação Mobile */}
        <nav className="p-4">
          <ul className="space-y-2">
            {itens.map((item) => {
              const Icone = item.icone
              return (
                <li key={item.to}>
                  <NavLink 
                    to={item.to} 
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-105'
                      }
                    `} 
                    onClick={onFechar}
                  >
                    <Icone className="w-5 h-5" />
                    <span className="font-medium">{item.rotulo}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}
