"use client";

import { useState } from "react";
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
        <div className={styles.header}>
          <span className={styles.subtitle}>Pertanyaan Umum</span>
          <h2 className={styles.title}>Tanya Jawab Seputar Airbag</h2>
          <p className={styles.desc}>
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan oleh pelanggan kami mengenai perbaikan sistem SRS Airbag.
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
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
                <div
                  className={styles.answerWrapper}
                  style={{ maxHeight: isActive ? "200px" : "0" }}
                >
                  <div className={styles.answerContent}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
