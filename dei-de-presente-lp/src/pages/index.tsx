import ImageCarousel from "@/components/Carousel";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.scss";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.texts}>
          <h1>Dar e receber presentes ficou ainda melhor!</h1>
          <h5>
            com o <strong>dei de presente</strong> você tem um site para o seu
            evento e cria listas de uma maneira prática, rápida e muuuuito
            fácil.
          </h5>
        </div>
        <ImageCarousel />
        <div className={styles.button}>
          <button>
            COMEÇAR AGORA! <img src="/arrowRight.svg" />
          </button>
        </div>
        <div className={styles.movingBars}>
          <div className={styles.topBar}>
            <div className={styles.topBarContent}>
              {Array.from({ length: 16 }, (_, index) => (
                <React.Fragment key={index}>
                  <img src="/gift.svg" alt="Gift" />
                  <span>DAR E RECEBER PRESENTES FICOU AINDA MELHOR!</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className={styles.bottomBar}>
            <div className={styles.bottomBarContent}>
              {Array.from({ length: 16 }, (_, index) => (
                <React.Fragment key={index}>
                  <img src="/giftBlack.svg" alt="Gift" />
                  <span>DAR E RECEBER PRESENTES FICOU AINDA MELHOR!</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
