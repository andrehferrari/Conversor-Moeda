import './App.css';
import Conversor from './components/Conversor/Conversor'
import Topo from './components/Topo'

function App() {
  return (
    <div>
      <Topo />
      <Conversor moedaA='USD' moedaB='BRL'/>
      <Conversor moedaA='BRL' moedaB='USD'/>
    </div>
  );
}

export default App;