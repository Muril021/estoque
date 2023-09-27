import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

import axios from 'axios';

import styles from './Itens.module.css';

const Itens = ({nomeItem, qtd, id}) => {
  const [foiRemovido, setFoiRemovido] = useState(false);

  const handleRemove = () => {
    axios.delete(`http://localhost:3030/itens/${id}`)
     .then((resp) => {
      console.log(resp);
      setFoiRemovido(true);
     })
     .catch((err) => {
      console.log(err);
     })
  };

  if (foiRemovido) {
    return null;
  };

  return (
    <tr className={styles.itens}>
      <td className={styles.nome}>
        <p>{nomeItem}</p>
      </td>
      <td className={styles.qtd}>
        <p>{qtd}</p>
      </td>
      <td className={styles.buttons}>
        <Link to={`/editar/${id}`} className={styles.edit}>
          <BsFillPencilFill />
        </Link>
        <button className={styles.remove} onClick={handleRemove}>
          <BsFillTrashFill />
        </button>
      </td>
    </tr>
  );
}

export default Itens;