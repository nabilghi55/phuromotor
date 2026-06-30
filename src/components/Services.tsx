"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    title: "Reset Modul SRS (Crash Data)",
    desc: "Mereset data tabrakan (crash data) pada modul komputer airbag pasca terjadi benturan. Mengaktifkan kembali modul orisinal mobil tanpa perlu membeli modul baru.",
    badge: "Solusi Hemat 80%",
    icon: (
      <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Restorasi Cover Dashboard & Setir",
    desc: "Memperbaiki dan merekondisi cover klakson setir and panel dashboard yang pecah akibat mengembangnya balon airbag agar kembali rapi, rapat, dan presisi.",
    badge: "Presisi & Rapi",
    icon: (
      <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Ganti Clockspring Kabel Spiral",
    desc: "Perbaikan dan penggantian kabel spiral setir (clockspring) yang putus. Solusi untuk klakson mati, indikator SRS menyala, dan tombol audio setir macet.",
    badge: "Suku Cadang OEM",
    icon: (
      <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Pemasangan Balon Airbag & Sensor",
    desc: "Instalasi balon inflator baru dan penggantian sensor tabrakan (crash sensor) OEM depan yang rusak untuk mengembalikan kesiapan keselamatan aktif 100%.",
    badge: "Standar Pabrikan",
    icon: (
      <svg className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export default function Services() {
  return (
    <section id="layanan" className={`section ${styles.servicesSection}`}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.header}
        >
          <div className={styles.titleArea}>
            <span className={styles.subtitle}>Spesialisasi Kami</span>
            <h2 className={styles.title}>Solusi Sistem SRS Airbag Mobil</h2>
          </div>
          <p className={styles.desc}>
            Layanan perbaikan sistem keselamatan berkendara (SRS Airbag) paling lengkap dan terpercaya di Surakarta. Menangani semua jenis dan merek mobil.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.grid}
        >
          {services.map((service, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <span className={styles.number}>{service.num}</span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
              
              <div className={styles.cardFooter}>
                <span className={styles.badge}>{service.badge}</span>
                <a
                  href={`https://wa.me/6285867123339?text=Halo%20Phuro%20Motor%20Solo,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaLink}
                >
                  Konsultasi
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
