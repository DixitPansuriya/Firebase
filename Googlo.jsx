import React, { useEffect, useState } from 'react'
import { auth,provaider } from './Googlofirebase'
import { signInWithPopup } from 'firebase/auth'
import Login from './Login'

export default function Google() {
    const [verifictions,setVerifictions] = useState()
    

    function verifiction () {

        signInWithPopup(auth,provaider).then((data)=>{
            
            setVerifictions(data.user.email)
            localStorage.setItem("email",data.user.email)

        })
         }
         useEffect(() => {
         localStorage.getItem("email")
         }, [])
         
  return (
    <div>
        {
            verifictions ?  <Login/> :

    <button onClick={verifiction}>verifiction this google</button>
        }
    </div>
  )
}
