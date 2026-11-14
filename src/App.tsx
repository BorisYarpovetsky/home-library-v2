import { useState } from 'react'

import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoveryKeyPage from './pages/RecoveryKeyPage'

import './App.css'

type Page = 'welcome' | 'login' | 'register' | 'recovery'

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

  if (page === 'recovery') {
    return (
      <RecoveryKeyPage
        onClose={() => setPage('register')}
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
