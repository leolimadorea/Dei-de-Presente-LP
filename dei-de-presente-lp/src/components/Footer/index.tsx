import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <p>© 2023 Deidepresente.</p>
            <p> Todos os direitos reservados</p>
          </div>
          <div className={styles.middle}>
            <img src="/logo2.svg" />
          </div>
          <div className={styles.rightSide}>
            <p>Termos de serviço</p>
            <p>Política de privacidade</p>
          </div>
        </div>
      </div>
    </>
  );
}
