import React from "react";
import styles from "./styles.module.scss";

interface AnimatedCirclesProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCircles = ({ className, children }: AnimatedCirclesProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className="row">
        <div className="colmd12">
          {children}
          <div className={styles.oneanimate}></div>
          <div className={styles.twoanimate}></div>
          <div className={styles.threeanimate}></div>
          <div className={styles.fouranimate}></div>
          <div className={styles.fiveanimate}></div>
          <div className={styles.sixanimate}></div>
          <div className={styles.sevenanimate}></div>
          <div className={styles.eightanimate}></div>
          <div className={styles.nineanimate}></div>
          <div className={styles.tenanimate}></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircles;
