import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

const AuthContexto = createContext(null)

export function AuthProvider({ children }) {
  const navegar = useNavigate()
  const [usuario, setUsuario] = useState(null)
  const [token, setToken] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const t = localStorage.getItem('mm_token')
    const u = localStorage.getItem('mm_usuario')
    if (t) setToken(t)
    if (u) setUsuario(JSON.parse(u))
    setCarregando(false)
  }, [])

  useEffect(() => {
    const reqId = api.instancia.interceptors.request.use((config) => {
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })
    const resId = api.instancia.interceptors.response.use(
      (res) => res,
      (erro) => {
        if (erro?.response?.status === 401) {
          sair()
          navegar('/login')
        }
        return Promise.reject(erro)
      }
    )
    return () => {
      api.instancia.interceptors.request.eject(reqId)
      api.instancia.interceptors.response.eject(resId)
    }
  }, [token, navegar])

  async function entrar(email, senha) {
    const { data } = await api.auth.login({ email, senha })
    setToken(data?.token)
    setUsuario(data?.usuario || null)
    localStorage.setItem('mm_token', data?.token || '')
    localStorage.setItem('mm_usuario', JSON.stringify(data?.usuario || null))
    return data
  }

  async function registrar(dados) {
    const { data } = await api.auth.register(dados)
    setToken(data?.token)
    setUsuario(data?.usuario || null)
    localStorage.setItem('mm_token', data?.token || '')
    localStorage.setItem('mm_usuario', JSON.stringify(data?.usuario || null))
    return data
  }

  function sair() {
    setToken(null)
    setUsuario(null)
    localStorage.removeItem('mm_token')
    localStorage.removeItem('mm_usuario')
  }

  const valor = useMemo(() => ({ usuario, token, carregando, entrar, registrar, sair }), [usuario, token, carregando])
  return <AuthContexto.Provider value={valor}>{children}</AuthContexto.Provider>
}

export function useAuth() { return useContext(AuthContexto) }
