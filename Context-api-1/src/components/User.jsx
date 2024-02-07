import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function User() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={(e)=>handleSubmit(e)}>Submit</button>
    </div>
  )
}
