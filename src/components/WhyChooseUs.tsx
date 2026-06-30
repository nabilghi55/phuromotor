"use client";

import { motion } from "framer-motion";
import styles from "./WhyChooseUs.module.css";

const features = [
  {
    title: "Teknisi Khusus & Berpengalaman",
    desc: "Sistem SRS airbag membutuhkan keahlian khusus dan berisiko tinggi. Teknisi kami sangat terlatih menangani airbag mobil Jepang, Eropa, dan Amerika secara aman.",
    icon: (
      <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Alat Scanner OEM Khusus",
    desc: "Kami mendeteksi kode error secara akurat hingga tingkat milidetik menggunakan scanner canggih setara scanner resmi dealer/pabrikan.",
    icon: (
      <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Garansi Tertulis",
    desc: "Setiap pengerjaan reset modul, pergantian kabel clockspring, atau pasang airbag baru akan diberikan kartu garansi tertulis demi ketenangan Anda.",
    icon: (
      <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Pengerjaan Transparan",
    desc: "Semua proses diagnostik dilakukan secara terbuka di depan pemilik. Tidak ada biaya siluman atau penggantian suku cadang fiktif.",
    icon: (
      <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

const rightContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} as const;

const rightCardVariants = {
  hidden: { opacity: 0, x: 50, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className={`section ${styles.whySection}`}>
      <div className={`container ${styles.container}`}>
        {/* Left Column */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.leftContent}
        >
          <span className={styles.subtitle}>Prioritas Kami</span>
          <h2 className={styles.title}>Keamanan & Standar Orisinal</h2>
          <p className={styles.desc}>
            Kami percaya bahwa sistem airbag adalah pertahanan terakhir keselamatan Anda saat berkendara. Oleh karena itu, pengerjaan kami berfokus untuk mengaktifkan kembali seluruh sistem kelistrikan & komponen SRS secara sempurna.
          </p>

          <div className={styles.warningPanel}>
            <svg className={styles.warningIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className={styles.warningTextWrapper}>
              <h4 className={styles.warningLabel}>Bahaya Mematikan Indikator Secara Ilegal!</h4>
              <p className={styles.warningText}>
                Banyak bengkel umum yang hanya mematikan lampu indikator error di dashboard secara paksa dengan cara mencabut bohlam lampu atau merusak sirkuit. Di Phuro Motor Solo, kami memperbaiki modul secara menyeluruh agar sistem perlindungan tabrakan tetap aktif.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Feature Cards */}
        <motion.div
          variants={rightContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.features}
        >
          {features.map((feat, idx) => (
            <motion.div
              variants={rightCardVariants}
              key={idx}
              className={styles.featureCard}
            >
              <div className={styles.iconWrapper}>
                {feat.icon}
              </div>
              <div className={styles.textWrapper}>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
