import Image from "next/image";

export default function About() {
  return (
    <main style={styles.main}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.title}>About Our Company</h1>
        <p style={styles.subtitle}>
          We are a professional construction company delivering world-class
          residential and commercial projects across Nigeria.
        </p>
      </section>

      {/* IMAGE SECTION */}
      <section style={styles.section}>
        <Image
          src="/images/gd.jpg"
          alt="Construction team"
          width={1200}
          height={600}
          style={styles.image}
        />
      </section>

      {/* ABOUT TEXT */}
      <section style={styles.textSection}>
        <h2 style={styles.heading}>Who We Are</h2>

        <p style={styles.text}>
          We specialize in building construction, renovation, fencing,
          interlocking, plumbing, electrical installations, architectural
          design, and full engineering solutions. Our goal is to deliver
          strong, durable, and beautiful structures that stand the test of
          time.
        </p>

        <p style={styles.text}>
          With years of experience and a skilled workforce, we ensure every
          project is completed with precision, safety, and excellence.
        </p>
      </section>

      {/* VIDEO SECTION */}
      <section style={styles.videoSection}>
        <h2 style={styles.heading}>Company Story</h2>

        <video
          controls
          style={styles.video}
        >
          <source src="/images/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p style={styles.videoText}>
          Watch how we bring construction dreams into reality through
          innovation, teamwork, and professionalism.
        </p>
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const styles: any = {
  main: {
    padding: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  hero: {
    textAlign: "center",
    padding: "40px 10px",
  },

  title: {
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#555",
    maxWidth: "700px",
    margin: "0 auto",
  },

  section: {
    marginTop: "30px",
  },

  image: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },

  textSection: {
    marginTop: "40px",
  },

  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#444",
    marginBottom: "15px",
  },

  videoSection: {
    marginTop: "40px",
  },

  video: {
    width: "100%",
    borderRadius: "12px",
    marginTop: "15px",
  },

  videoText: {
    marginTop: "10px",
    color: "#555",
    fontSize: "14px",
  },
};