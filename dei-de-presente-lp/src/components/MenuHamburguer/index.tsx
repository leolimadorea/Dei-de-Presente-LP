import { useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main className={styles.header}>
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
        {isMenuOpen && (
          <div className={styles.modal}>
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
        )}
      </main>
      {isMenuOpen && (
        <div className={styles.backdrop} onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;
