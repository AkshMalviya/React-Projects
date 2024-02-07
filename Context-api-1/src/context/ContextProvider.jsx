import React, { useState } from 'react'
import Usercontext from './UserContext'

export default function ContextProvider({children}) {
    const [user, setUser ] = useState(null)
  return (
    <Usercontext.Provider value={{user, setUser}}>
        {children}
    </Usercontext.Provider>
  )
}

