export default function Contact() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Contact Us</h1>

      <p>📧 Email: info@construction.com</p>
      <p>📞 Phone: +234 800 123 4567</p>
      <p>📍 Location: Lagos, Nigeria</p>

      {/* CONTACT FORM */}
      <form style={{ display: "grid", gap: "10px", marginTop: "20px" }}>
        <input placeholder="Your Name" />
        <input placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>

    </main>
  );
}
