import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './App.jsx'
import Header from './components/header.jsx'
import Card from './components/grid-card.jsx'

const App = () => {
  const [score, setScore] = useState(0);

  const handleScoreValue = (addScore) => {
    if (score === 10) {
      setScore(0)
    }
    setScore(score + addScore);
  }

  const handleScoreReset = () => {
    setScore(0)
  }

  return (
    <>
      <Header score={score} />
      <Card addScore={handleScoreValue} resetScore={handleScoreReset} />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
