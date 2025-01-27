"use client";

import React from "react";
import styles from "../styles/LuxeSpa.module.css";

const LuxeSpa: React.FC = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/vib.svg" alt="LUXE Logo" className={styles.logoImage} />
          <span className={styles.logoText}>LUXE</span>
        </div>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
            <li>
              <a href="#products">PRODUCTS</a>
            </li>
          </ul>
          <button className={styles.ctaButton}>BOOK A SERVICE</button>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Experience Luxury at LUXE Spa</h1>
        </div>
        <img src="/spa.jpg" alt="Luxury Spa" className={styles.heroImage} />
      </section>

      <footer className={styles.fakeFooter}>
        <div className={styles.fakeFooterLinks}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
        <p className={styles.fakeFooterText}>© 2025 LUXE Spa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxeSpa;

