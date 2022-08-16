import './App.css';
import Conversor from './components/Conversor/Conversor'
import Topo from './components/Topo'

function App() {
  return (
    <div>
      <Topo />
      <Conversor moedaA='USD' moedaB='BRL'/>
      <Conversor moedaA='BRL' moedaB='USD'/>
      <Conversor moedaA='EUR' moedaB='BRL'/>
      <Conversor moedaA='BRL' moedaB='EUR'/>
    </div>
  );
}

export default App;