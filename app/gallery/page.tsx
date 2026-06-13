export default function Gallery() {
  const upholsteryImages = [
    "/images/up1.jpeg",
    "/images/up2.jpeg",
    "/images/up3.jpeg",
    "/images/up4.jpeg",
    "/images/up5.jpeg",
  ];

  const brickWorksImages = [
    // Add brick work images later
  ];

  const residentialImages = [
    // Add house project images later
  ];

  const commercialImages = [
    // Add office/commercial building images later
  ];

  return (
    <main style={styles.main}>
      {/* TITLE */}
      <h1 style={styles.title}>Our Gallery</h1>

      <p style={styles.subtitle}>
        Explore our completed projects across construction, upholstery,
        renovations, and engineering works.
      </p>

      {/* ================= UPHOLSTERY ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          🪑 Upholstery Chairs (Home & Office)
        </h2>

        <p style={styles.sectionText}>
          Professional upholstery services for homes, offices, hotels,
          conference halls, reception areas, and executive workspaces.
        </p>

        <div style={styles.grid}>
          {upholsteryImages.map((img, index) => (
            <div key={index} style={styles.card}>
              <img
                src={img}
                alt={`Upholstery ${index + 1}`}
                style={styles.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= BRICK WORKS ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          🧱 Brick & Block Works (Fence & Building)
        </h2>

        <p style={styles.sectionText}>
          Fence construction, block laying, foundations, and building wall
          construction projects.
        </p>

        <div style={styles.emptyBox}>
          Images coming soon...
        </div>
      </section>

      {/* ================= RESIDENTIAL ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          🏠 Residential Building Projects
        </h2>

        <p style={styles.sectionText}>
          Modern residential homes built with quality materials and expert
          craftsmanship.
        </p>

        <div style={styles.emptyBox}>
          Images coming soon...
        </div>
      </section>

      {/* ================= COMMERCIAL ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          🏢 Commercial Building Projects
        </h2>

        <p style={styles.sectionText}>
          Office complexes, shopping plazas, warehouses, and commercial
          developments.
        </p>

        <div style={styles.emptyBox}>
          Images coming soon...
        </div>
      </section>

      {/* VIDEO SECTION */}
      <div style={styles.videoSection}>
        <h2 style={styles.videoTitle}>
          🎥 Project Highlight Video
        </h2>

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
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
  },

  section: {
    marginBottom: "60px",
  },

  sectionTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#1f2937",
  },

  sectionText: {
    color: "#666",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    display: "block",
  },

  emptyBox: {
    padding: "40px",
    border: "2px dashed #d1d5db",
    borderRadius: "12px",
    textAlign: "center",
    color: "#6b7280",
    background: "#f9fafb",
  },

  videoSection: {
    marginTop: "50px",
    textAlign: "center",
  },

  videoTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },

  video: {
    width: "100%",
    maxWidth: "900px",
    borderRadius: "12px",
  },
};