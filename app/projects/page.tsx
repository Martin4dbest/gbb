export default function Projects() {
  const projects = [
    {
      title: "Luxury Apartments - Lagos",
      image: "/images/gd.jpg",
      video: "/images/v1.mp4",
    },
    {
      title: "Shopping Complex - Abuja",
      image: "/images/pc1.jpeg",
      video: "/images/v2.mp4",
    },
    {
      title: "Modern Estate Construction",
      image: "/images/gd.jpg",
      video: "/images/v3.mp4",
    },
    {
      title: "Road & Interlocking Project",
      image: "/images/pc1.jpeg",
      video: "/images/v4.mp4",
    },
  ];

  return (
    <main style={styles.main}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Our Projects</h1>
        <p style={styles.subtitle}>
          Some of our completed construction works across Nigeria.
        </p>
      </section>

      {/* GRID */}
      <section style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{project.title}</h3>

            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
            />

            {/* VIDEO */}
            <video
              controls
              style={styles.video}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support video tag.
            </video>
          </div>
        ))}
      </section>
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

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#555",
    marginTop: "10px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "15px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  video: {
    width: "100%",
    height: "180px",
    marginTop: "10px",
    borderRadius: "10px",
  },
};