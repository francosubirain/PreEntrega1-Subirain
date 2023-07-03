
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contador/>
      <ItemListContainer greeting="aca va a ir la grilla con mis productos"/>
    </div>
  );
}

export default App;
