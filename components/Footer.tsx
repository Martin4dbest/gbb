import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-yellow-400">GBB</span>{" "}
            <span className="text-white">Construction & Finishing Ltd</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            Professional{" "}
            <span className="text-yellow-300">Construction</span>,{" "}
            <span className="text-yellow-300">Engineering</span>,{" "}
            <span className="text-yellow-300">Plumbing</span>,{" "}
            <span className="text-yellow-300">Electrical</span>,{" "}
            <span className="text-yellow-300">Furniture</span> and{" "}
            <span className="text-yellow-300">Industrial Cleaning Services</span>{" "}
            delivered with excellence and quality.
          </p>
        </div>

                                {/* Quick Links */}
        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-yellow-400">
            Contact
          </h3>

          <div className="space-y-3 text-gray-300 text-sm sm:text-base">

            <p className="flex items-start gap-2">
              <span>📞</span>
              <span>
                <span className="text-yellow-300 font-semibold">Phone:</span>{" "}
                +234 7066654507
              </span>
            </p>

            <p className="flex items-start gap-2">
              <span>📧</span>
              <span>
                <span className="text-yellow-300 font-semibold">Email:</span>{" "}
                goodbetterbest52@gmail.com
              </span>
            </p>

            <p className="flex items-start gap-2">
              <span>📍</span>
              <span>
                <span className="text-yellow-300 font-semibold">Location:</span>{" "}
                Port Harcourt, Nigeria
              </span>
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500/20 py-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">
          GBB Construction & Finishing Ltd
        </span>
        . All Rights Reserved.
      </div>

    </footer>
  );
}