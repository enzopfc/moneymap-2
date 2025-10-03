import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  CreditCard, 
  Target, 
  BarChart3, 
  BookOpen, 
  Settings,
  X
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
  return (
    <>
      {/* Overlay para mobile */}
      {aberto && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onFechar}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        md:relative md:top-0 md:h-auto md:transform-none md:shadow-lg md:rounded-xl
        ${aberto ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header móvel */}
        <div className="flex items-center justify-between p-4 border-b md:hidden">
          <span className="font-semibold text-gray-800">Menu</span>
          <button 
            onClick={onFechar}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Navegação */}
        <nav className="p-4">
          <ul className="space-y-2">
            {itens.map((item) => {
              const Icone = item.icone
              return (
                <li key={item.to}>
                  <NavLink 
                    to={item.to} 
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
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
