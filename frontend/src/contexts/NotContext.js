
import { createContext,useReducer } from "react";

export const NotContext = createContext()

export const notReducer=(state,action)=>{
    switch (action.type) {
        case 'NOT_OLUSTUR':
          return{
            notlar:[action.payload,...state.notlar]
          }

          case 'NOT_DOLDUR':
          return{
           notlar:action.payload
          }
    
        default:
         return state
    }

}


export const NotContextProvider=({children})=>{
    const [state,dispatch]=useReducer(notReducer,{
        notlar:[]
    })
    return (
        <NotContext.Provider value={{...state,dispatch}}>
            {children}
        </NotContext.Provider>
    )
}