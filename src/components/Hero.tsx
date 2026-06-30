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
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
} as const;

const statCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export default function Hero() {
  return (
    <section id="beranda" className={styles.hero}>
      {/* Background and grid overlays */}
      <div className={styles.background} />
      <div className="grid-bg" />

      {/* Giant Watermark Text (Absolute background placement) */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.96 }}
        animate={{ opacity: 0.03, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={styles.watermark}
      >
        PHURO
      </motion.div>

      <div className={`container ${styles.container}`}>
        <div className={styles.mainGrid}>
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
                Konsultasi Sekarang &rarr;
              </a>
              
              <a href="#layanan" className={styles.btnSecondary}>
                Eksplor Layanan
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Showcase (Car, Outline Watermark, Diagonal Line) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className={styles.visual}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              className={styles.diagonalLine}
            />

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className={styles.carFrame}
            >
              <img
                src="/assets/deployed_airbag.jpg"
                alt="Spesialis Servis Airbag Mobil Solo"
                className={styles.carImage}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Horizontal Divider Line */}
        <div className={styles.divider} />

        {/* HUD Statistics Grid (Horizontal Row) */}
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
