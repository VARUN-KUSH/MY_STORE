import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
//import Signup from './pages/Signup'
import Header from './components/Header'
//import Login from './pages/auth/Login'
import Product from './components/Product'
import Categories from './components/categories/Categories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
       <Header />
       <Categories />
      
      
      
    </>
  )
}

export default App
