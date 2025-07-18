import React from 'react';
import styles from 'header.module.css';
// import useMedia from '../../../hooks/useMedia';

import ImageLogo from '../../../assets/img/logo/logo-01.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <section>
        <img src={ImageLogo} alt="imagem logotipo" />
      </section>
    </header>
  );
};
export default Header;
