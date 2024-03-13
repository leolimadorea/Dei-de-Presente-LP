import ImageCarousel from "@/components/Carousel";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.scss";
import React, { useState } from "react";

interface Theme {
  id: number;
  name: string;
  description: string;
  image: string;
}

const themes: Theme[] = [
  {
    id: 1,
    name: "BALADA",
    description: "Tema de festa, um dos mais modernos e extravagantes.",
    image: "/festa.svg",
  },
  {
    id: 2,
    name: "CASAMENTO",
    description: "Tema minimalista, com muito sentimento e elegância.",
    image: "/images/casamento.png",
  },
  {
    id: 3,
    name: "ANIVERSÁRIO",
    description:
      "Seguindo a temática de aniversário, ideal para qualquer celebração de aniversário",
    image: "/images/aniversario.png",
  },
];

export default function Home() {
  const [hoveredTheme, setHoveredTheme] = useState<Theme>(themes[0]);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.title}>
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
        <div className={styles.images}>
          <div className={styles.texts}>
            <h1>Como Funciona?</h1>
            <h5>
              Abaixo está um exemplo de como criar um site para seu evento!
            </h5>
          </div>
          <div className={styles.iconHowWorks}>
            <div className={styles.icons}>
              <img src="/brush.svg" />
              <h2>Template</h2>
              <p>
                Escolha o template que mais combina <br />
                com seu evento e crie seu site.
              </p>
            </div>
            <div className={styles.icons}>
              <img src="/rightArrow.svg" />
            </div>
            <div className={styles.icons}>
              <img src="/laptop.svg" />
              <h2>Lista de presentes</h2>
              <p>
                Faça uma lista com os presentes <br />
                exclusivos da sua festa!
              </p>
            </div>
            <div className={styles.icons}>
              <img src="/bottomArrow.svg" />
            </div>
            <div className={styles.icons}>
              <img src="/rocket.svg" />
              <h2>Pronto!</h2>
              <p>
                Agora é so compartilhar o link com seus <br />
                convidados!
              </p>
            </div>
            <div className={styles.icons}>
              <img src="/rightArrow.svg" />
            </div>
            <div className={styles.icons}>
              <img src="/handshake.svg" />
              <h2>Retirada</h2>
              <p>
                No fim do evento você retira o valor <br />
                equivalente aos presentes que ganhou
              </p>
            </div>
          </div>
        </div>
        <div className={styles.virtualStore}>
          <div className={styles.subTitle}>
            <h5>Crie uma loja virtual</h5>
            <p>Sua loja do seu jeito</p>
          </div>
          <div className={styles.sitePreview}>
            <img src="/sitePreview.svg" />
          </div>
        </div>
        <div className={styles.themesContainer}>
          <div className={styles.optionsList}>
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={styles.option}
                onMouseEnter={() => setHoveredTheme(theme)}
                onMouseLeave={() => setHoveredTheme(themes[0])}
              >
                <div className={styles.optionContent}>
                  <h3 className={styles.optionTitle}>{theme.name}</h3>
                  <p className={styles.optionDescription}>
                    {theme.description}
                  </p>
                </div>
                {hoveredTheme?.id === theme.id && (
                  <button className={styles.myButton}>Quero o meu</button>
                )}
              </div>
            ))}
          </div>
          {hoveredTheme && (
            <div className={styles.displayArea}>
              <img src={hoveredTheme.image} alt={hoveredTheme.name} />
            </div>
          )}
        </div>
        <div className={styles.round}>
          <div className={styles.leftSide}>
            <h5>A sua festa pode fazer diferença na vida de alguém!</h5>
            <p>
              com o <strong>dei de presente</strong> você pode destinar 1% do
              valor arrecadado ao <strong> Hospital Erasto Gartner</strong> em
              Curitiba!
            </p>
          </div>
          <div className={styles.rightside}>
            <img src="/dance.svg" />
          </div>
        </div>
      </main>
    </>
  );
}
