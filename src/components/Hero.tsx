"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="beranda" className={styles.hero}>
      {/* Background and grid overlays */}
      <div className={styles.background} />
      <div className="grid-bg" />

      <div className={`container ${styles.container}`}>
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.content}
        >
          <motion.div variants={itemVariants} className={styles.tagline}>
            <span>●</span> Bengkel Airbag Solo Raya
          </motion.div>
          
          <motion.h1 variants={itemVariants} className={styles.title}>
            Spesialis Servis <br />
            <span className={styles.titleHighlight}>Airbag Mobil Solo</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.description}>
            Solusi perbaikan sistem SRS Airbag dan reset crash data modul orisinal bergaransi di Surakarta. Mengembalikan fitur keselamatan berkendara Anda 100% berfungsi optimal sesuai standar orisinal pabrikan.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.btnGroup}>
            <a
              href="https://wa.me/6285867123339?text=Halo%20Phuro%20Motor%20Solo,%20saya%20ingin%20konsultasi%20mengenai%20perbaikan%20airbag%20mobil%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Konsultasi Sekarang
            </a>
            
            <a href="#layanan" className={styles.btnSecondary}>
              Eksplor Layanan
            </a>
          </motion.div>
        </motion.div>

        {/* HUD Statistics Grid */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          animate="visible"
          className={styles.stats}
        >
          <motion.div variants={statCardVariants} className={styles.statCard}>
            <div className={styles.statVal}>
              100%<span className={styles.statValHighlight}> Aktif</span>
            </div>
            <div className={styles.statLabel}>SRS Keselamatan</div>
            <div className={styles.statDesc}>Kalibrasi presisi sesuai modul bawaan mobil.</div>
          </motion.div>

          <motion.div variants={statCardVariants} className={styles.statCard}>
            <div className={styles.statVal}>
              Teknologi<span className={styles.statValHighlight}> OEM</span>
            </div>
            <div className={styles.statLabel}>Sistem Pemindaian</div>
            <div className={styles.statDesc}>Diagnosa sensor & kelistrikan tingkat tinggi.</div>
          </motion.div>

          <motion.div variants={statCardVariants} className={styles.statCard}>
            <div className={styles.statVal}>
              1,200<span className={styles.statValHighlight}>+</span>
            </div>
            <div className={styles.statLabel}>Kendaraan Sukses</div>
            <div className={styles.statDesc}>Dipercaya oleh ratusan pemilik mobil se-Solo Raya.</div>
          </motion.div>

          <motion.div variants={statCardVariants} className={styles.statCard}>
            <div className={styles.statVal}>
              Garansi<span className={styles.statValHighlight}> Resmi</span>
            </div>
            <div className={styles.statLabel}>Jaminan Servis</div>
            <div className={styles.statDesc}>Garansi tertulis untuk menjamin ketenangan Anda.</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
