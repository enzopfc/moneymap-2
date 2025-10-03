import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Botao from '../components/Botao'
import Alerta from '../components/Alerta'
import { useAuth } from '../context/AuthContext'
import { validarEmail } from '../utils/validacoes'
export default function Login() {
  const { entrar } = useAuth(); const navegar = useNavigate()
  const [email, setEmail] = useState(''); const [senha, setSenha] = useState(''); const [erro, setErro] = useState(''); const [carregando, setCarregando] = useState(false)
  async function onSubmit(e){ e.preventDefault(); setErro(''); if(!validarEmail(email)) return setErro('Informe um e-mail válido.'); if(!senha) return setErro('Informe a senha.'); try{ setCarregando(true); await entrar(email, senha); navegar('/dashboard'); }catch(ex){ setErro(ex?.response?.data?.mensagem || 'Não foi possível entrar.'); } finally{ setCarregando(false);} }
  return <div className="max-w-md mx-auto mt-10 card p-6"><h1 className="text-xl font-semibold mb-4">Acessar conta</h1>{erro && <div className="mb-3"><Alerta tipo="erro" mensagem={erro} /></div>}<form onSubmit={onSubmit} className="space-y-3"><Input rotulo="E-mail" placeholder="seu@email" valor={email} onChange={e=>setEmail(e.target.value)} tipo="email" /><Input rotulo="Senha" placeholder="••••••" valor={senha} onChange={e=>setSenha(e.target.value)} tipo="password" /><Botao type="submit" carregando={carregando}>Entrar</Botao></form><div className="text-sm mt-4 text-gray-600">Não tem conta? <Link to="/register" className="text-emerald-700 hover:underline">Criar conta</Link></div></div>
}
