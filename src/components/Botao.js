import styles from './Botao.module.css';

const Botao = ({type, text}) => {
  return (
    <button type={type} className={styles.botao}>{text}</button>
  );
}

export default Botao;