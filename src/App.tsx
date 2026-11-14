import { useState } from 'react'
import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import './App.css'

function App() {

  type Page = 'welcome' | 'login'

  const [page, setPage] = useState<Page>('welcome')

  if (page === 'login') {
    return (
      <LoginPage
        onBack={() => setPage('welcome')}
      />
    )
  }

  return (
    <WelcomePage
      onStart={() => setPage('login')}
      onLogin={() => setPage('login')}
    />
  )
}

export default App
