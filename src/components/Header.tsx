"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          {/* Logo with pulse dot */}
          <a href="#" className={styles.logo}>
            <img src="/assets/logo.png" alt="Logo Phuro Motor Solo" className={styles.logoImage} />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Phuro Motor</span>
              <span className={styles.logoSubtitle}>Airbag Specialist</span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className={styles.nav}>
            <a href="#beranda" className={styles.navLink}>Beranda</a>
            <a href="#layanan" className={styles.navLink}>Layanan</a>
            <a href="#keunggulan" className={styles.navLink}>Keunggulan</a>
            <a href="#galeri" className={styles.navLink}>Galeri</a>
            <a href="#faq" className={styles.navLink}>FAQ</a>
            <a href="#kontak" className={styles.navLink}>Kontak</a>
          </nav>

          {/* WhatsApp CTA (Desktop) */}
          <a
            href="https://wa.me/6285867123339?text=Halo%20Phuro%20Motor%20Solo,%20saya%20ingin%20tanya%20mengenai%20servis%20airbag%20mobil."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.13 1.012 11.5 1.01 6.064 1.01 1.638 5.38 1.636 10.81c0 1.696.452 3.35 1.307 4.8l-.993 3.63 3.707-.972c1.457.796 3.011 1.216 4.697 1.218zm11.385-6.84c-.302-.15-1.785-.88-2.063-.982-.278-.102-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.224-.652.075-.302-.15-1.276-.47-2.43-1.499-.898-.8-1.503-1.789-1.68-2.088-.177-.3-.02-.461.13-.611.137-.135.302-.35.454-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.68-1.639-.93-2.247-.244-.588-.492-.51-.68-.52h-.58c-.2 0-.526.075-.8.375-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.116 4.522.715.31 1.273.496 1.71.635.717.228 1.37.196 1.885.119.574-.085 1.785-.73 2.038-1.436.253-.706.253-1.313.177-1.436-.075-.12-.278-.195-.58-.346z"/>
            </svg>
            Konsultasi WA
          </a>

          {/* Hamburger Menu Icon (Mobile) */}
          <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Buka Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <button className={styles.closeButton} onClick={toggleMobileMenu} aria-label="Tutup Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <a href="#beranda" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Beranda</a>
        <a href="#layanan" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Layanan</a>
        <a href="#keunggulan" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Keunggulan</a>
        <a href="#galeri" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Galeri</a>
        <a href="#faq" className={styles.mobileNavLink} onClick={toggleMobileMenu}>FAQ</a>
        <a href="#kontak" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Kontak Kami</a>
        <a
          href="https://wa.me/6285867123339?text=Halo%20Phuro%20Motor%20Solo,%20saya%20ingin%20tanya%20mengenai%20servis%20airbag%20mobil."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileCta}
          onClick={toggleMobileMenu}
        >
          Hubungi via WhatsApp
        </a>
      </div>
    </>
  );
}
