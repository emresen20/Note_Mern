import React from 'react'
import { useNotcontext } from '../hooks/useNotContext'

export default function NotDetay({not}) { //homede dolduruyoruz
  
    const {dispatch}=useNotcontext()

    const handleClick=async ()=>{
        console.log(not._id)
        const response = await fetch('/api/notlar/'+not._id,{
            method:'DELETE'
        })

        const json =await response.json()
        if(response.ok){
            //stateden temizle
            dispatch({
                type:'NOT_SIL',
                payload:json
            })
        }
    }


  return (
    <div  className='not-detay'>
        <h4>{not.baslik}</h4>
        <p>{not.aciklama}</p>
        <p>{not.createdAt}</p>
        <span onClick={handleClick}>X</span>
    </div>
  )
}
