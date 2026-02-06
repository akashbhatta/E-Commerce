import React from 'react'
import LoginForm from '../components/login/LoginForm'

function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-10">
        <LoginForm/>
    </div>
  )
}

export default LoginPage
