import { useState, useEffect } from 'react';

import styles from './Mensagem.module.css';

const Mensagem = ({msg, tipo}) => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisivel(false);
      return;
    }

    setVisivel(true);

    setTimeout(() => {
      setVisivel(false);
    }, 3000);
  }, [msg]);

  return (
    <>
      {visivel && (
        <div className={styles[tipo]}>{msg}</div>
      )}
    </>
  );
}

export default Mensagem;