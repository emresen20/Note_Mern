import React from 'react'
import { useNotcontext } from '../hooks/useNotContext'
import moment from 'moment'
import 'moment/locale/tr'
import { useAuthContext } from '../hooks/useAuthContext'

export default function NotDetay({not}) { //homede dolduruyoruz
  
    const {dispatch}=useNotcontext()
    const {kullanici}=useAuthContext();

    const handleClick=async ()=>{
        console.log(not._id)
        if(!kullanici){
            return
        }
        const response = await fetch('/api/notlar/'+not._id,{
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${kullanici.token}`
            }
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
