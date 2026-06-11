export default function Gallery() {
  const images = [
    "/images/gal1.jpeg",
    "/images/gal2.jpeg",

    // reusing existing images
    "/images/k1.jpeg",
    "/images/k2.jpeg",
    "/images/k3.jpeg",
    "/images/gd.jpg",
    "/images/pc1.jpeg",
    "/images/gd.jpg",
    "/images/k1.jpeg",
  ];

  return (
    <main style={styles.main}>
      {/* TITLE */}
      <h1 style={styles.title}>Our Gallery</h1>
      <p style={styles.subtitle}>
        A collection of our construction projects and site works.
      </p>

      {/* IMAGE GRID */}
      <div style={styles.grid}>
        {images.map((img, index) => (
          <div key={index} style={styles.card}>
            <img src={img} alt={`Gallery ${index}`} style={styles.image} />
          </div>
        ))}
      </div>

      {/* VIDEO SECTION */}
      <div style={styles.videoSection}>
        <h2 style={styles.videoTitle}>Project Highlight Video</h2>

        <video controls style={styles.video}>
          <source src="/images/v1.mp4" type="video/mp4" />
          Your browser does not support video tag.
        </video>
      </div>
    </main>
  );
}

/* ================= STYLES ================= */

const styles: any = {
  main: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
  },

  card: {
    overflow: "hidden",
    borderRadius: "10px",
  },

  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "0.3s",
  },

  videoSection: {
    marginTop: "30px",
    textAlign: "center",
  },

  videoTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  video: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "12px",
  },
};