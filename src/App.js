import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import axios from 'axios';
import Itens from './components/Itens';
import CadastrarItem from './components/CadastrarItem';

import './App.css';
import Container from './layout/Container';
import Navbar from './layout/Navbar';

function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/itens')
      .then(resp => {
        console.log(resp.data);
        setItens(resp.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <Navbar />
      <Container customClass='lista'>
        <Routes>
          <Route exact path='/' element={itens.length > 0 && 
            itens.map((item) => (
              <Itens id={item.id} nomeItem={item.nome} />
            ))} 
          />
          <Route path='/cadastrar' element={<CadastrarItem />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
