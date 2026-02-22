import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* PROJECT DATA */
const projects = [
  {
    title: "Weather Web App",
    description:
      "A responsive weather application that fetches real-time data using APIs and displays forecasts with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "/weather.png",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React, Tailwind CSS, and Framer Motion featuring smooth animations and modern UI.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/porfolio.png",
    live: "#",
    github: "#",
  },
  {
    title: "FitSphere Web Application",
    description:
      "A full men's suits rentals web system developed for academic purposes with form validation and structured data handling.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    image: "/FitShpere.jpg",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  /* Mouse glow state */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  /* Mouse tracking */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const move = (e) => {
      const rect = section.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setActive(true);
    };

    const leave = () => setActive(false);

    section.addEventListener("mousemove", move);
    section.addEventListener("mouseleave", leave);

    return () => {
      section.removeEventListener("mousemove", move);
      section.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-gray-950 text-white py-28 overflow-hidden"
    >
      {/* MOUSE FOLLOW GLOW */}
      <motion.div
        animate={{
          x: mouse.x - 200,
          y: mouse.y - 200,
          opacity: active ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="pointer-events-none hidden md:block absolute top-0 left-0
                   w-[400px] h-[400px] bg-teal-400/15 blur-3xl rounded-full"
      />

      <div className="relative container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mb-20"
        >
          <p className="text-teal-400 uppercase tracking-widest text-sm">
            My Work
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Featured <span className="text-teal-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            A selection of projects showcasing my skills in UI/UX design and
            frontend development.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* CARD */}
              <motion.div
                whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative h-full bg-white/5 backdrop-blur
                           border border-white/10 rounded-xl overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform
                               duration-500 group-hover:scale-110"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 opacity-0
                                  group-hover:opacity-100 transition" />
                </div>

                {/* CONTENT */}
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-teal-500/10 text-teal-400
                                   px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm
                                 text-teal-400 hover:text-teal-300 transition"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>

                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm
                                 text-gray-400 hover:text-white transition"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-teal-500/10 blur-2xl" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
