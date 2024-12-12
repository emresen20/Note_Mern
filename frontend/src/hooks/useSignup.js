

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup=()=>{
    const [hata,setHata]=useState(null)
    const [loading,setLoading]=useState(false)

    const {dispatch}=useAuthContext()

    const signUp = async (email, parola) => {
        setLoading(true);
        setHata(null);
    
        try {
            const response = await fetch('/api/kullanici/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, // Düzeltilmiş yazım
                body: JSON.stringify({ email, parola })
            });
    
            const json = await response.json();
    
            if (!response.ok) { // `response.ok` ile hataları kontrol etmeliyiz
                setLoading(false);
                setHata(json.hata || 'Bilinmeyen bir hata oluştu');
                return;
            }
    
            localStorage.setItem('kullanici', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setHata('Sunucuyla bağlantı kurulamadı.');
        }
    };
    
    return { signUp, loading, hata };

    

}
