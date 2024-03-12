import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <main className={styles.container}>
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
}
