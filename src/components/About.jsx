import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

export default function About() {
  return (
    <section id="about" className="relative bg-gray-950 text-white py-28 overflow-hidden">
      <div className="container mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">

        {/* LEFT – CAPTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-12">

            {/* Accent line */}
            <div className="absolute -left-4 top-0 h-full w-1 bg-teal-400 rounded-full" />

            {/* Caption */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight uppercase">
              <span className="text-gray-500 text-7xl leading-none">“</span>

              <span className="block text-teal-400 tracking-wider">
                YOU CAN GO ANY SPEED
              </span>

              <span className="block text-white">
                BUT WE CAN GO
              </span>

              <span className="block text-teal-400 tracking-wider">
                ANYWHERE
              </span>

              <span className="text-gray-500 text-7xl leading-none">”</span>
            </h2>

            {/* Glow */}
            <div className="absolute inset-0 bg-teal-500/10 blur-3xl -z-10" />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-black
                         px-8 py-3 rounded-lg font-semibold transition"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="border border-white/20 hover:border-teal-400
                         px-8 py-3 rounded-lg transition"
            >
              Projects
            </a>
          </div>
        </motion.div>

      

      </div>

      <div className="absolute top-0 -right-[10%] w-[60vw] h-[110vh] pointer-events-none overflow-hidden">
        <Spline scene="https://prod.spline.design/BQtYdlCt5GBNSmT1/scene.splinecode" />
      </div>

    </section>
  );
}
