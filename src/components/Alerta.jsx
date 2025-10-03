import React from 'react'
export default function Alerta({ tipo = 'info', mensagem }) {
  const mapa = { sucesso: 'bg-emerald-50 text-emerald-800 border-emerald-200', erro: 'bg-red-50 text-red-800 border-red-200', info: 'bg-blue-50 text-blue-800 border-blue-200' }
  return <div className={`border rounded px-3 py-2 text-sm ${mapa[tipo] || mapa.info}`}>{mensagem}</div>
}
