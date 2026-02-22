import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white border-t border-white/10">
      {/* Glow */}
      <div className="absolute inset-0 bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold tracking-wide">
              <span className="text-teal-400">U</span>dith
            </h3>
            <p className="text-gray-400 mt-3 max-w-xs text-sm">
              Software Engineering Student & UI/UX Designer crafting modern,
              intuitive digital experiences.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
              <li><a href="#experience" className="hover:text-teal-400 transition">Experience</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10
                           rounded-lg hover:border-teal-400
                           hover:text-teal-400 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10
                           rounded-lg hover:border-teal-400
                           hover:text-teal-400 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="p-3 bg-white/5 border border-white/10
                           rounded-lg hover:border-teal-400
                           hover:text-teal-400 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10
                        flex flex-col sm:flex-row items-center
                        justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Udith. All rights reserved.</p>
          <p>Designed & Built with ❤️ using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
