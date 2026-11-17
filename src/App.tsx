
import { useState } from 'react'

import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoveryKeyPage from './pages/RecoveryKeyPage'
import DatabaseSetupPage from './pages/DatabaseSetupPage'

import LearningPage from './pages/LearningPage'

import './App.css'

type Page =
  | 'welcome'
  | 'login'
  | 'register'
  | 'recovery'
  | 'database-setup'
  | 'learning'

function App() {
  // const [page, setPage] = useState<Page>('welcome')
  const [page, setPage] = useState<Page>('learning')

  // Экран авторизации
  if (page === 'login') {
    return (
      <LoginPage
        onBack={() => setPage('welcome')}
        onRegister={() => setPage('register')}
      />
    )
  }

  // Экран регистрации
  if (page === 'register') {
    return (
      <RegisterPage
        onBack={() => setPage('welcome')}
        onLogin={() => setPage('login')}
      />
    )
  }

  // Экран сохранения ключа восстановления
  if (page === 'recovery') {
    return (
      <RecoveryKeyPage
        onClose={() => setPage('register')}
      />
    )
  }

  // Экран первичной настройки базы данных
  if (page === 'database-setup') {
    return <DatabaseSetupPage />
  }

  // Учебная страница
  if (page === 'learning') {
    return <LearningPage />
  }

  // Приветственный экран
  return (
    <WelcomePage
      onRegister={() => setPage('register')}
      onLogin={() => setPage('login')}
    />
  )
}

export default App
