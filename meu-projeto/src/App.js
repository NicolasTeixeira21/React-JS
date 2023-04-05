import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <SayMyName nome="Nicolas"/>
      <SayMyName nome="Fred"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Nicolas" 
      idade="21" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
    </div>
  )
}

export default App;
