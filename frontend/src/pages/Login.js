import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [confirmParola, setConfirmParola] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading, hata } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parola !== confirmParola) {
      alert('Parolalar eşleşmiyor!');
      return;
    }

    await login(email, parola);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Giriş Yap</h3>
      <label>Email:</label>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Parola:</label>
      <div className='password-input'>
        <input
          type={showPassword ? 'text' : 'password'}
          value={parola}
          onChange={(e) => setParola(e.target.value)}
        />
        <span
          onClick={togglePasswordVisibility}
          className='toggle-password-icon'
        >
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>

      <label>Parola (Tekrar):</label>
      <div className='password-input'>
        <input
          type={showPassword ? 'text' : 'password'}
          value={confirmParola}
          onChange={(e) => setConfirmParola(e.target.value)}
        />
        <span
          onClick={togglePasswordVisibility}
          className='toggle-password-icon'
        >
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>

      <button disabled={loading} type='submit'>
        Giriş
      </button>
      {hata && <div className='error'>{hata}</div>}
    </form>
  );
}
