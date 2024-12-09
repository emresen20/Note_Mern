import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>Emre Şen Not Defteri</h1>
            </Link>
            <nav>
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
