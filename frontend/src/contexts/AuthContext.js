import { Children, createContext,useEffect,useReducer } from "react";

export const AuthContext = createContext();

export const   authReducer=(state,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {kullanici:action.payload}

            case 'LOGOUT':
                return {kullanici:null}
    

        default:
            return state
    }
}


export const AuthContextProvider=({children})=>{




    const [state,dispatch]=useReducer(authReducer,{
        kullanici:null
    })

    useEffect(()=>{
        const kullanici=JSON.parse(localStorage.getItem('kullanici'))
        if(kullanici){
            dispatch({type:'LOGIN',payload:kullanici})
        }
    },[])

    console.log('Auth Context',state)

    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}