import { Link } from "react-router-dom";

import styles from './Botao.module.css';

const Botao = ({to, text}) => {
  return (
    <Link to={to} className={styles.botao}>{text}</Link>
  );
}

export default Botao;