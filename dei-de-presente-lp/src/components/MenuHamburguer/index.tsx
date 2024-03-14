import React, { useState } from "react";
import HamburguerMenu from "@/icons/HamburguerMenu";
import WhiteLogo from "/public.whitelogo.svg";
import styles from "./styles.module.scss";

const MenuHamburguer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.logo}>
        <img src="/whitelogo.svg" />
      </div>
      <div className={styles.menuHamburguer}>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <HamburguerMenu />
        </div>
        {isOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
              <ul className={styles.menuItens}>
                <li onClick={() => (window.location.href = "/casamento")}>
                  Casamento
                </li>
                <li onClick={() => (window.location.href = "/aniversario")}>
                  Aniversário
                </li>
                <li onClick={() => (window.location.href = "/balada")}>
                  Balada
                </li>
                <li onClick={() => (window.location.href = "/entrar")}>
                  Entrar na conta
                </li>
                <li onClick={() => (window.location.href = "/criar-site")}>
                  Criar site
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuHamburguer;
