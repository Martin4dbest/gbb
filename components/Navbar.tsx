"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-lg">
          <span className="text-yellow-400">GBB</span> Construction & Finishing Ltd
        </Link>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-yellow-400">
              {link.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 border-b border-white/10"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}