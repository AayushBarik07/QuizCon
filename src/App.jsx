import { useState } from 'react'
import WelcomePage from './components/welcomePage.jsx'
import QuesComponent from './components/QuesComponent.jsx'
import ResultComponent from './components/ResultComponent.jsx'

function App() {
  const [showScreen, setShowScreen] = useState('Welcome')
  const [answers, setAnswers] = useState([])

  return (
    <>
      <div className="container px-5 py-5">
          {showScreen == 'Welcome' && <WelcomePage {...{ showScreen, setShowScreen }} />}
          {showScreen == 'Ques' && <QuesComponent {...{ showScreen, setShowScreen, answers, setAnswers }}  />}
          {showScreen == 'Result' && <ResultComponent {...{ answers, setAnswers }} />}
      </div>
    </>
  )
}

export default App
