
import { NotContext } from "../contexts/NotContext";

import { useContext } from "react";

export const useNotcontext=()=>{

    const context=useContext(NotContext)

    if(!context){
        throw new Error('Context Yüklenemed,')
    }
    return context

}