import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import MouseGlow from "./MouseGlow";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-950 text-white flex items-center overflow-hidden">

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Particles */}
      <ParticleBackground />

      <div className="relative container mx-auto px-6 grid gap-12 md:grid-cols-2 items-center z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-teal-400 mb-4">👋 Hello, I’m Udith Indrachapa</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Crafting <span className="text-teal-400">digital</span> <br />
            experiences with <em className="font-light">precision.</em>
          </h1>

          <p className="text-gray-400 mt-6 max-w-md">
            Software Engineering student building modern, scalable web
            applications with modern technology.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-teal-500 hover:bg-teal-600 text-black px-6 py-3 rounded-lg font-semibold transition">
              Contact Me
            </button>
            <a
            href="/Udith-CV.pdf"
            download
            className="border border-gray-700 hover:border-teal-400
                        px-6 py-3 rounded-lg transition"
            >
            Download CV
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500 blur-3xl opacity-20 rounded-xl"></div>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 object-cover rounded-xl border border-gray-800"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
