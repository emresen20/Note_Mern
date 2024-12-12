import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {

    const [email,setEmail]=useState('')
    const [parola,setParola]=useState('')

    const {login,loading,hata}= useLogin();


    const handleSumbit=async(e)=> {
        e.preventDefault();
        await login(email,parola)
    }

  return (
    <form className='signup' onSubmit={handleSumbit}>
        <h3>Giriş Yap</h3>
        <label>Email:</label>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}/>

        <label>Parola:</label>
        <input type='password' onChange={(e)=>setParola(e.target.value)}/>
        
        <button disabled={loading} type='sumbit'> Giriş</button>
        {hata && <div className='error'>{hata}</div>}
    </form>
  )
}
