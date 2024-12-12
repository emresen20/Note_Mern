import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


export default function Navbar() {

  const {logout}= useLogout()

  const handleClick=()=>{
      logout()
  }

  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>Emre Şen Not Defteri</h1>
            </Link>
            <nav>
              <div>
                <button onClick={handleClick}>Çıkış</button>
              </div>
              <div>
                <Link to="/login"> 
                  Giriş Yap
                </Link>
                <Link to="/signup"> 
                  Üye Ol
                </Link>
              </div>
            </nav>
        </div>
    </header>
  )
}
