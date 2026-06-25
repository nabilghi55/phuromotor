import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="kontak" className={`section ${styles.contactSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Info & Lokasi</span>
          <h2 className={styles.title}>Hubungi Phuro Motor Solo</h2>
          <p className={styles.desc}>
            Konsultasikan kerusakan airbag mobil Anda atau jadwalkan kunjungan servis langsung ke bengkel kami.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Contact details */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              {/* Address */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.infoIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Alamat Bengkel</span>
                  <span className={styles.infoValue}>Jl. Adi Sumarmo No. 120</span>
                  <span className={styles.infoSub}>Banyuanyar, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57137</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.infoIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Jam Kerja</span>
                  <span className={styles.infoValue}>Senin - Sabtu (08:00 - 17:00)</span>
                  <span className={styles.infoSub}>Hari Minggu & Libur Nasional Tutup</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.infoIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Kontak Admin</span>
                  <span className={styles.infoValue}>+62 858-6712-3339</span>
                  <span className={styles.infoSub}>Respons cepat untuk konsultasi keluhan airbag & booking jadwal.</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>Ingin Tahu Estimasi Biaya?</h3>
              <p className={styles.ctaText}>
                Hubungi admin kami lewat WhatsApp untuk mendapatkan estimasi biaya pengerjaan. Anda bisa mengirimkan foto dashboard atau lampu indikator yang menyala.
              </p>
              <a
                href="https://wa.me/6285867123339?text=Halo%20Phuro%20Motor%20Solo,%20saya%20ingin%20tanya%20mengenai%20estimasi%20biaya%20servis%20airbag%20mobil%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <svg className={styles.waIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.13 1.012 11.5 1.01 6.064 1.01 1.638 5.38 1.636 10.81c0 1.696.452 3.35 1.307 4.8l-.993 3.63 3.707-.972c1.457.796 3.011 1.216 4.697 1.218zm11.385-6.84c-.302-.15-1.785-.88-2.063-.982-.278-.102-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.224-.652.075-.302-.15-1.276-.47-2.43-1.499-.898-.8-1.503-1.789-1.68-2.088-.177-.3-.02-.461.13-.611.137-.135.302-.35.454-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.68-1.639-.93-2.247-.244-.588-.492-.51-.68-.52h-.58c-.2 0-.526.075-.8.375-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.116 4.522.715.31 1.273.496 1.71.635.717.228 1.37.196 1.885.119.574-.085 1.785-.73 2.038-1.436.253-.706.253-1.313.177-1.436-.075-.12-.278-.195-.58-.346z" />
                </svg>
                Kirim WhatsApp Sekarang
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps embed */}
          <div className={styles.mapCol}>
            <iframe
              title="Peta Lokasi Phuro Motor Solo"
              className={styles.mapFrame}
              src="https://maps.google.com/maps?q=Banyuanyar,%20Banjarsari,%20Surakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
