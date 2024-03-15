import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface Theme {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function ThemeListComponent() {
  const themes: Theme[] = [
    {
      id: 1,
      name: 'BALADA',
      description: 'Tema de festa, um dos mais modernos e extravagantes.',
      image: '/balada.svg',
    },
    {
      id: 2,
      name: 'CASAMENTO',
      description: 'Tema minimalista, com muito sentimento e elegância.',
      image: '/casamento.svg',
    },
    {
      id: 3,
      name: 'ANIVERSÁRIO',
      description:
        'Seguindo a temática de aniversário, ideal para qualquer celebração de aniversário.',
      image: '/aniver.svg',
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [imageClassName, setImageClassName] = useState(styles.imgNotSelected);

  useEffect(() => {
    setImageClassName(styles.imgSelected);
  }, [selectedTheme]);

  useEffect(() => {
    setImageClassName(styles.imgNotSelected);

    const timer = setTimeout(() => {
      setImageClassName(styles.imgSelected);
    }, 150);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, [selectedTheme, styles.imgNotSelected, styles.imgSelected]);

  return (
    <div className={styles.themesContainer}>
      <div className={styles.themeTitle}>
        <h5>TEMAS</h5>
        <span>
          Temas de <p>alto padrão,</p>
        </span>
        <span>
          seu evento <p>inesquecível</p>
        </span>
      </div>
      <div className={styles.themesContent}>
        <ul className={styles.optionsList}>
          {themes.map((theme, index) => (
            <li
              key={theme.id}
              className={`${styles.option} ${
                selectedTheme.id === theme.id ? styles.selected : ''
              }`}
              onClick={() => setSelectedTheme(theme)}
            >
              <div className={styles.optionHeader}>
                <span className={styles.optionNumber}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className={styles.optionContainer}>
                  <h3 className={styles.optionTitle}>{theme.name}</h3>
                  <p className={styles.optionDescription}>
                    {theme.description}
                  </p>
                </div>
                {selectedTheme?.id === theme.id && (
                  <button className={styles.myButton}>Quero o meu</button>
                )}
              </div>
            </li>
          ))}
        </ul>
        {
          <div className={styles.displayArea}>
            <img
              src={selectedTheme.image}
              alt={selectedTheme.name}
              className={imageClassName}
            />
          </div>
        }
      </div>
    </div>
  );
}
