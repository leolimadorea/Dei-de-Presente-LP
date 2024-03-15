import { useState } from "react";
import styles from "./styles.module.scss";

interface HeaderProps {
  fixed: boolean;
}

const Header = ({ fixed }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main className={`${styles.header} ${fixed ? styles.fixed : ""}`}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo2.svg" alt="Logo" />
          </div>
          <div
            className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          className={`${styles.modal} ${
            isMenuOpen ? styles.modalOpen : styles.modalClosed
          }`}
        >
          <div className={styles.themes}>
            <h5>CASAMENTO</h5>
            <h5>ANIVERSÁRIO</h5>
            <h5>BALADA</h5>
          </div>
          <hr className={styles.hr} />
          <div className={styles.buttons}>
            <button className={styles.enter}>ENTRAR</button>
            <button className={styles.create}>CRIAR SITE</button>
          </div>
        </div>
      </main>
      <div
        className={`${styles.backdrop} ${
          isMenuOpen ? styles.backdropOpen : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
