import React from 'react'
import { NavLink } from 'react-router-dom'

const itens = [
  { to: '/dashboard', rotulo: 'Dashboard' },
  { to: '/transactions', rotulo: 'Transações' },
  { to: '/goals', rotulo: 'Metas' },
  { to: '/reports', rotulo: 'Relatórios' },
  { to: '/education', rotulo: 'Educação' },
  { to: '/settings', rotulo: 'Configurações' },
]

export default function Sidebar({ aberto, onFechar }) {
  return (
    <aside className={`card w-64 h-fit md:h-auto md:block ${aberto ? 'block' : 'hidden'} md:sticky md:top-4`}>
      <nav className="p-3">
        <ul className="space-y-1">
          {itens.map((i) => (
            <li key={i.to}>
              <NavLink to={i.to} className={({ isActive }) => `block px-3 py-2 rounded hover:bg-emerald-50 ${isActive ? 'bg-emerald-100 text-emerald-700' : ''}`} onClick={onFechar}>{i.rotulo}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
