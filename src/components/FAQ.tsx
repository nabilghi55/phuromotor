"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Apakah airbag yang sudah meletus bisa diservis atau harus diganti baru?",
    a: "Untuk modul SRS (komputer airbag) dan cover dashboard/setir yang pecah bisa direkondisi agar kembali rapi. Namun, untuk balon inflator utama harus diganti baru demi menjamin airbag dapat mengembang kembali dengan aman saat terjadi benturan berikutnya.",
  },
  {
    q: "Berapa lama waktu pengerjaan servis airbag mobil di Phuro Motor Solo?",
    a: "Pengerjaan ringan seperti reset crash data modul SRS atau penggantian clockspring kabel spiral membutuhkan waktu sekitar 1 hingga 3 jam dan bisa ditunggu. Untuk pengerjaan rekondisi total (dashboard robek, cover setir pecah, balon baru) membutuhkan waktu sekitar 1 hari kerja, kami sat set bos.",
  },
  {
    q: "Kenapa lampu indikator airbag di dashboard mobil saya tiba-tiba menyala?",
    a: "Paling sering disebabkan oleh ausnya kabel spiral setir (clockspring), sensor benturan yang teroksidasi air/kotoran, soket kabel longgar di bawah kursi, atau tegangan aki yang drop. Kami menyarankan untuk melakukan scan diagnostik OBD di bengkel kami guna mendeteksi kode error pastinya.",
  },
  {
    q: "Apakah modul SRS airbag yang sudah crash wajib diganti baru?",
    a: "Bengkel resmi biasanya mewajibkan penggantian modul baru dengan biaya yang tinggi. Namun di Phuro Motor Solo, kami dapat menghapus data crash (reset crash data) menggunakan software programer khusus sehingga modul orisinal bawaan mobil Anda bisa digunakan kembali dengan normal & aman.",
  },
  {
    q: "Apakah Phuro Motor Solo melayani semua tipe dan merek mobil?",
    a: "Ya, kami berpengalaman melayani sistem airbag untuk berbagai jenis mobil Jepang (Toyota, Honda, Daihatsu, Suzuki, Nissan, Mitsubishi), Eropa (BMW, Mercedes-Benz, Audi, VW), Amerika (Ford, Chevrolet), hingga mobil-mobil keluaran terbaru.",
  },
];

const accordionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section id="faq" className={`section ${styles.faqSection}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.header}
        >
          <span className={styles.subtitle}>Pertanyaan Umum</span>
          <h2 className={styles.title}>Tanya Jawab Seputar Airbag</h2>
          <p className={styles.desc}>
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan oleh pelanggan kami mengenai perbaikan sistem SRS Airbag.
          </p>
        </motion.div>

        {/* Accordion FAQ */}
        <motion.div
          variants={accordionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.accordion}
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
              >
                <button
                  className={styles.questionHeader}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <span>{faq.q}</span>
                  {/* Modern Plus/Close Icon */}
                  <svg
                    className={styles.icon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.answerWrapper}
                    >
                      <div className={styles.answerContent}>
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
