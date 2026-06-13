export default function Contact() {
  return (
    <main style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      Contact Us

      <p>📧 Email: goodbetterbest52@gmail.com</p>
      <p>📞 Phone: +234 7066654507</p>
      <p>📍 Location: Port Harcourt, Nigeria</p>

      {/* CONTACT FORM */}
      <form
        action="https://formspree.io/f/xgobpllk"
        method="POST"
        style={{ display: "grid", gap: "10px", marginTop: "20px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          style={styles.textarea}
        />

        {/* Subject line */}
        <input
          type="hidden"
          name="_subject"
          value="New Message - Good Better Best Construction and Finishing Ltd"
        />

        {/* ✅ ENFORCE BOTH EMAILS */}
        <input
          type="hidden"
          name="_cc"
          value="goodbetterbest52@gmail.com,martin4dtruth2@gmail.com"
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </main>
  );
}

/* ================= STYLES ================= */

const styles: any = {
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    resize: "none",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f5c542",
    fontWeight: "bold",
    cursor: "pointer",
  },
};