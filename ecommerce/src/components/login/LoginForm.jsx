import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/UseAuth';

function LoginForm() {
  
  const {login, setEmail,setPassword, email,password, fullName, setFullName} = useAuth();
  const navigate = useNavigate();

   

    function onSubmit(event){
      event.preventDefault();
    
    if (email && password){
      login();
      navigate('/');
    }

      setEmail('');
      setPassword('');
      // setFullName('');
    }
    function fullNameFn(event){
    setFullName(event.target.value);
    }
    
    function setEmailFn(event){
      setEmail(event.target.value);

    }
    function setPasswordFn(event){
      setPassword(event.target.value);

    }
    console.log("email", email);
    console.log("password", password);
    console.log("fullName", fullName);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Welcome back</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Sign in to your account</h1>
          <p className="mt-2 text-sm text-slate-500">Use your details below to continue.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={fullNameFn}
              value={fullName}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200/70"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={setEmailFn}
              value={email}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200/70"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={setPasswordFn}
              value={password}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200/70"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
