import { useState } from 'react'
import './App.css'
import ContextProvider from './context/ContextProvider'
import User from './components/user'
import Profile from './components/Profile'

function App() {
  return (
    <ContextProvider>
        <User/>
        <Profile/>
    </ContextProvider>
  )
}

export default App
