import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [hata, setHata] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, parola) => {
    setLoading(true);
    setHata(null);

    try {
      const response = await fetch('/api/kullanici/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, parola }),
      });

      const json = await response.json();
      console.log(json)

      if (!response.ok) {
        // Hata durumunda, hata mesajını kaydedin
        setHata(json.hata || 'Giriş işlemi başarısız.');
        setLoading(false);
        return;
      }

      // Başarılı durumda işlemleri yapın
      localStorage.setItem('kullanici', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
      setLoading(false);
    } catch (error) {
      // Beklenmedik bir hata durumunda
      setHata('Bir hata meydana geldi. Lütfen tekrar deneyin.');
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    hata,
  };
};
