import React from 'react'
import { useNotcontext } from '../hooks/useNotContext'
import moment from 'moment'
import 'moment/locale/tr'

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
        <p>{moment(new Date(not.createdAt)).fromNow()}</p>
        <span  className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}
