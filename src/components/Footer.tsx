import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.col}>
            <div className={styles.brand}>
              <span className={styles.brandTitle}>Phuro Motor</span>
              <span className={styles.brandSubtitle}>Spesialis Airbag</span>
            </div>
            <p className={styles.desc}>
              Spesialis perbaikan sistem SRS Airbag Mobil terpercaya di Surakarta. Mengembalikan modul SRS dan mengganti komponen keselamatan berkendara secara profesional & bergaransi.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Navigasi</h3>
            <ul className={styles.links}>
              <li className={styles.linkItem}><a href="#beranda">Beranda</a></li>
              <li className={styles.linkItem}><a href="#layanan">Layanan</a></li>
              <li className={styles.linkItem}><a href="#keunggulan">Keunggulan</a></li>
              <li className={styles.linkItem}><a href="#galeri">Galeri Foto</a></li>
              <li className={styles.linkItem}><a href="#faq">Tanya Jawab</a></li>
              <li className={styles.linkItem}><a href="#kontak">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Layanan</h3>
            <ul className={styles.links}>
              <li className={styles.linkItem}><a href="#layanan">Reset Modul SRS Airbag</a></li>
              <li className={styles.linkItem}><a href="#layanan">Rekondisi Dashboard</a></li>
              <li className={styles.linkItem}><a href="#layanan">Ganti Cover Airbag Setir</a></li>
              <li className={styles.linkItem}><a href="#layanan">Ganti Kabel Spiral Setir</a></li>
              <li className={styles.linkItem}><a href="#layanan">Instalasi Sensor & Balon Baru</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with SEO Boost */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Phuro Motor Solo. Semua Hak Dilindungi. Spesialis Airbag Solo Raya.
          </p>
          
          <div className={styles.seoKeywords}>
            <strong>Wilayah Layanan Kami (Solo Raya):</strong> Surakarta (Solo), Karanganyar, Sukoharjo, Boyolali, Sragen, Wonogiri, Klaten, Kartasura, Palur, Colomadu, Solo Baru, Banyuanyar, Banjarsari, Jebres, Laweyan, Pasarkliwon. <br />
            <strong>Layanan Terkait:</strong> Airbag Solo, Airbag Surakarta, Servis Airbag Solo, Servis Airbag Surakarta, Bengkel Airbag Solo, Reset Modul SRS Solo, Kabel Spiral Setir Solo, Clockspring Solo, Ganti Airbag Mobil Solo Raya.
          </div>
        </div>
      </div>
    </footer>
  );
}
