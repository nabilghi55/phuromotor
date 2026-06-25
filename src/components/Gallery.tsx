"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const galleryImages = [
  {
    src: "/assets/PHOTO-2025-12-15-14-04-08.jpg",
    title: "Proses Pembongkaran Airbag",
    category: "Servis Airbag",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-09.jpg",
    title: "Rekondisi Dashboard Robek",
    category: "Dashboard & Cover",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-10.jpg",
    title: "Reset Crash Data Modul SRS",
    category: "Reset Software",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-11.jpg",
    title: "Penggantian Kabel Spiral Setir",
    category: "Kelistrikan Setir",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-12 2.jpg",
    title: "Pemasangan Balon SRS Baru",
    category: "Instalasi Airbag",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-13 2.jpg",
    title: "Kalibrasi Sensor Benturan",
    category: "Kalibrasi Sistem",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-15 2.jpg",
    title: "Servis Airbag Setir Orisinal",
    category: "Cover & Setir",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-15.jpg",
    title: "Rekondisi Setir Kulit Mewah",
    category: "Cover & Setir",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-16.jpg",
    title: "Pemeriksaan Modul SRS SUV",
    category: "Servis Airbag",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-17.jpg",
    title: "Kalibrasi Ulang Modul Airbag",
    category: "Reset Software",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-18.jpg",
    title: "Perbaikan Kelistrikan Klakson",
    category: "Kelistrikan Setir",
  },
  {
    src: "/assets/PHOTO-2025-12-15-14-04-19.jpg",
    title: "Dashboard Terpasang Rapat",
    category: "Dashboard & Cover",
  },
  {
    src: "/assets/PHOTO-2025-12-23-16-31-32.jpg",
    title: "Diagnostik Akhir Scanner OBD",
    category: "Kalibrasi Sistem",
  },
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, galleryImages.length));
  };

  return (
    <section id="galeri" className={`section ${styles.gallerySection}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Dokumentasi Aktual</span>
          <h2 className={styles.title}>Galeri Pengerjaan Bengkel</h2>
          <p className={styles.desc}>
            Kumpulan bukti pengerjaan riil sistem airbag mobil oleh teknisi kami. Kami menjamin hasil akhir yang rapi, presisi, dan aman.
          </p>
        </div>

        {/* Image Grid */}
        <div className={styles.grid}>
          {galleryImages.slice(0, visibleCount).map((img, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.tag}>Aktual</span>
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{img.title}</h3>
                <span className={styles.cardDesc}>{img.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < galleryImages.length && (
          <div className={styles.btnContainer}>
            <button className={styles.loadMoreBtn} onClick={showMore}>
              Lihat Lebih Banyak Foto
              <svg
                className={styles.loadMoreIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
