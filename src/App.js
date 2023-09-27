import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ListaItens from './components/ListaItens';
import CadastrarItem from './components/CadastrarItem';
import Navbar from './layout/Navbar';
import Editar from './components/Editar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ListaItens />} />
        <Route path='/cadastrar' element={<CadastrarItem />} />
        <Route path='/editar/:id' element={<Editar />} />
      </Routes>
    </Router>
  );
}

export default App;
