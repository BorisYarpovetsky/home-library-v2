import { useState } from 'react'

import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import './App.css'

type Page = 'welcome' | 'login' | 'register'

function App() {
  const [page, setPage] = useState<Page>('welcome')

  if (page === 'login') {
    return (
      <LoginPage
        onBack={() => setPage('welcome')}
        onRegister={() => setPage('register')}
      />
    )
  }

  if (page === 'register') {
    return (
      <RegisterPage
        onBack={() => setPage('welcome')}
        onLogin={() => setPage('login')}
      />
    )
  }
  
  return (
    <WelcomePage
      onRegister={() => setPage('register')}
      onLogin={() => setPage('login')}
    />
  )

}

export default App
