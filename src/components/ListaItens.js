import { useState, useEffect } from 'react';

import axios from 'axios';
import Container from '../layout/Container';
import Itens from './Itens';

import styles from './ListaItens.module.css';

const ListaItens = () => {
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
    <>
      <div className={styles.button_container}>
        <a href='/cadastrar' className={styles.cadastrar}>
          + Add
        </a>
      </div>
      <Container>
        <table className={styles.table}>
          <thead>
            <tr className={styles.titulos}>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {itens.length > 0 &&
              itens.map((item) => (
                <Itens key={item.id} id={item.id} nomeItem={item.nome} qtd={item.qtd} />
              ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default ListaItens;