import Link from "next/link";
import LottiePlayer from "react-lottie-player";
import newWhatsapp from "../../../public/newWhatsapp.json";
import styles from "./styles.module.scss";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.link/480u9o"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingIcon}
    >
      <LottiePlayer
        animationData={newWhatsapp}
        play
        style={{ width: 100, height: 100 }} // Adjust size as needed
      />
    </Link>
  );
};

export default WhatsApp;
