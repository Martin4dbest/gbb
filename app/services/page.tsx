export default function Services() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Our Services</h1>

      <ul>
        <li>🏗 Building Construction</li>
        <li>🔧 Renovation</li>
        <li>🏢 Architectural Design</li>
        <li>📊 Project Management</li>
      </ul>

      {/* IMAGE GRID PLACEHOLDER */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        marginTop: "20px"
      }}>
        <div style={{ height: "150px", background: "#ddd" }}>Service Image 1</div>
        <div style={{ height: "150px", background: "#ddd" }}>Service Image 2</div>
        <div style={{ height: "150px", background: "#ddd" }}>Service Image 3</div>
        <div style={{ height: "150px", background: "#ddd" }}>Service Image 4</div>
      </div>

    </main>
  );
}
