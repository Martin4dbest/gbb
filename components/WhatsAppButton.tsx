import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347066654507"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-xl">
        <FaWhatsapp size={35} />
      </div>
    </a>
  );
}
