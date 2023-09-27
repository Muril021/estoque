import { Link } from "react-router-dom";

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to='/' className={styles.logo}>Estoque</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;