import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.heroImg}>
        <img
          src={require("../../assets/hero_headphones.png")}
          width={212}
          height="100%"
          alt="headphones"
        />
      </div>
    </div>
  );
};

export default Hero;
