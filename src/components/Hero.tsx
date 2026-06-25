import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="beranda" className={styles.hero}>
      {/* Background and grid overlays */}
      <div className={styles.background} />
      <div className="grid-bg" />

      <div className={`container ${styles.container}`}>
        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.tagline}>
            <span>●</span> Bengkel Airbag Solo Raya
          </div>
          
          <h1 className={styles.title}>
            Spesialis Servis <br />
            <span className={styles.titleHighlight}>Airbag Mobil Solo</span>
          </h1>
          
          <p className={styles.description}>
            Solusi perbaikan sistem SRS Airbag dan reset crash data modul orisinal bergaransi di Surakarta. Mengembalikan fitur keselamatan berkendara Anda 100% berfungsi optimal sesuai standar orisinal pabrikan.
          </p>

          <div className={styles.btnGroup}>
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
          </div>
        </div>

        {/* HUD Statistics Grid */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statVal}>
              100%<span className={styles.statValHighlight}> Active</span>
            </div>
            <div className={styles.statLabel}>SRS Keselamatan</div>
            <div className={styles.statDesc}>Kalibrasi presisi sesuai modul bawaan mobil.</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statVal}>
              OEM<span className={styles.statValHighlight}> Tech</span>
            </div>
            <div className={styles.statLabel}>Sistem Pemindaian</div>
            <div className={styles.statDesc}>Diagnosa sensor & kelistrikan tingkat tinggi.</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statVal}>
              1,200<span className={styles.statValHighlight}>+</span>
            </div>
            <div className={styles.statLabel}>Kendaraan Sukses</div>
            <div className={styles.statDesc}>Dipercaya oleh ratusan pemilik mobil se-Solo Raya.</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statVal}>
              Garansi<span className={styles.statValHighlight}> Resmi</span>
            </div>
            <div className={styles.statLabel}>Jaminan Servis</div>
            <div className={styles.statDesc}>Garansi tertulis untuk menjamin ketenangan Anda.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
