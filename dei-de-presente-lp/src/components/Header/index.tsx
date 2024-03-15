import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface HeaderProps {
  fixed: boolean;
}

const Header = ({ fixed }: HeaderProps) => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push("https://deidepresente.com");
  };

  const handleCreateClick = () => {
    router.push("https://deidepresente.com/create");
  };

  return (
    <>
      <main className={`${styles.header} ${fixed ? styles.fixed : ""}`}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo.svg" />
          </div>
          <div className={styles.rightside}>
            <div className={styles.themes}>
              <Link href="https://deidepresente.com/create">
                <h5>CASAMENTO</h5>
              </Link>
              <Link href="https://deidepresente.com/create">
                <h5>ANIVERSÁRIO</h5>
              </Link>
              <Link href="https://deidepresente.com/create">
                <h5>BALADA</h5>
              </Link>
            </div>
            <hr className={styles.hr} />
            <div className={styles.buttons}>
              <button className={styles.enter} onClick={handleEnterClick}>
                ENTRAR
              </button>

              <button className={styles.create} onClick={handleCreateClick}>
                CRIAR SITE
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
