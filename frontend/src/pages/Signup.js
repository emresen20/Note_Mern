import React, { useState } from 'react'

export default function Signup() {

    const [email,setEmail]=useState('')
    const [parola,setParola]=useState('')


    const handleSumbit=async(e)=> {
        e.preventDefault();
        console.log(email,parola)
    }

  return (
    <form className='signup' onSubmit={handleSumbit}>
        <h3>Üye Ol</h3>
        <label>Email:</label>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}/>

        <label>Parola:</label>
        <input type='password' onChange={(e)=>setParola(e.target.value)}/>
        
        <button type='sumbit'> Üye Ol</button>
    </form>
  )
}
