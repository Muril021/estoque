import styles from './Itens.module.css';

const Itens = ({id, nomeItem}) => {
  return (
    <div className={styles.itens}>
      <p key={id}>{nomeItem}</p>
    </div>
  );
}

export default Itens;