import styles from "./styles.module.scss";

interface HeaderProps {
  fixed: boolean;
}

const Header = ({ fixed }: HeaderProps) => {
  return (
    <>
      <main className={`${styles.header} ${fixed ? styles.fixed : ""}`}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo.svg" />
          </div>
          <div className={styles.rightside}>
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
        </div>
      </main>
    </>
  );
};

export default Header;
