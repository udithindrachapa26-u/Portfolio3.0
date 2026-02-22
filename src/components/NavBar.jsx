import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-wide text-white"
        >
          <span className="text-teal-400">U</span>dith
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition"
            >
              {link.name}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-400
                           transition-all duration-300 hover:w-full"
              />
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="bg-teal-500 hover:bg-teal-600 text-black
                       px-4 py-2 rounded-lg font-semibold transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              exit={{ y: -40 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 left-4
                         bg-gray-950 border border-white/10
                         rounded-2xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-teal-400 transition"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 bg-teal-500 hover:bg-teal-600
                             text-black text-center py-3 rounded-lg
                             font-semibold transition"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
