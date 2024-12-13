

import { useAuthContext } from "./useAuthContext";
import { useNotcontext } from "./useNotContext";

export const useLogout=()=>{
    const {dispatch}= useAuthContext()
    const {dispatch:notDispatch}=useNotcontext()

    const logout=()=>{
        localStorage.removeItem('kullanici')
        notDispatch({type:'NOT_DOLDUR',payload:null})
        dispatch({type:'LOGOUT'})
    }
    return {logout}
}