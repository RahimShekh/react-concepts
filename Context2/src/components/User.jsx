import React from 'react'
import Userdetails from './Userdetails'
import { useContext } from 'react'
import { userContext } from '../context/Context'

function User() {
    const {user,setUser} =  useContext(userContext)
    // console.log(user);
  return (
    <div>
        <Userdetails/>
        <h1>user details from context :</h1>
        <p>{user[0].name}</p>   
        <p>{user[1].name}</p>   
    </div>
  )
}

export default User
//map use karke data show kar sakte
// usecontext hook se data import maro or use se apna data user setuser nikalo
//phir use karo