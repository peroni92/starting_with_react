import './App.css'
import Saludo from './components/Saludo'
import Count from './components/Count'

function App() {

  return (
    <div className="App">
      <h1>Vite + React</h1>

      <Saludo name="Marcos" edad={32}></Saludo>
      <Saludo name="Pablo" edad={31}></Saludo>
      
      <div className="card">
        <Count />
      </div>
    </div>
  )
}

export default App
