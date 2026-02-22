import { motion, useScroll, useTransform } from "framer-motion";
import { title } from "framer-motion/client";
import { Palette, Code, GraduationCap } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* EXPERIENCE DATA */
const experiences = [
  {
    year: "2024 – Present",
    title: "Frontend & Backend Developer",
    company: "Personal Projects & Academic Projects",
    description:
      "Designing user-centered interfaces and developing responsive, high-performance web applications with smooth animations.",
    tech: ["React", "Tailwind", "Next.js", "Framer Motion"],
    icon: Code,
  },
  {
    year: "2024 - present",
    title: "UI/UX Designer",
    company: "Personal Projects & Acadamic Projects",
    description: "Created wireframes, prototypes, and intuitive user experiences with strong focus on usability and accessibility.",
    tech: ["Figma", "Adobe XD", "Sketch"],
    icon: Palette,
  },
  {
    year: "2023 – 2024",
    title: "Full stack Developer student",
    company: "Acadamic Projects",
    description:
      "Created wireframes, prototypes, and intuitive user experiences with strong focus on usability and accessibility.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    icon: GraduationCap,
  },
  {
    year: "2022 – Present",
    title: "Software Engineering Student",
    company: "Sabaragamuwa University Of Sri Lanka",
    description:
      "Learning core software engineering concepts while building academic and personal web projects.",
    tech: ["HTML", "CSS", "JavaScript", "OOP"],
    icon: GraduationCap,
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  /* Mouse-follow glow state */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  /* Scroll progress for timeline */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* Mouse move handler */
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
      id="experience"
      ref={sectionRef}
      className="relative bg-gray-950 text-white py-28 overflow-hidden"
    >
      {/* MOUSE FOLLOW GLOW (DESKTOP ONLY) */}
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
          className="max-w-xl mb-24"
        >
          <p className="text-teal-400 uppercase tracking-widest text-sm">
            Career Journey
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Experience that <span className="text-teal-400">speaks</span> volumes
          </h2>

          <p className="text-gray-400 mt-4">
            A timeline of my journey as a designer, developer, and student.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* BASE LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/10" />

          {/* ANIMATED LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="hidden md:block absolute left-1/2 top-0 w-px bg-teal-400 origin-top"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative md:w-1/2 ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-12"
                      : "md:pr-12"
                  }`}
                >
                  {/* DOT */}
                  <span className="hidden md:flex absolute top-10 -left-[9px]
                                   w-5 h-5 bg-teal-400 rounded-full
                                   items-center justify-center">
                    <span className="w-2 h-2 bg-gray-950 rounded-full" />
                  </span>

                  {/* CARD */}
                  <motion.div
                    whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group relative bg-white/5 backdrop-blur
                               border border-white/10 rounded-xl p-6 overflow-hidden"
                  >
                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                      <div className="absolute inset-0 bg-teal-500/10 blur-2xl" />
                    </div>

                    <div className="relative z-10">
                      <span className="text-teal-400 text-sm">{exp.year}</span>

                      <div className="flex items-center gap-3 mt-2">
                        <Icon className="w-5 h-5 text-teal-400" />
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                      </div>

                      <p className="text-gray-400 text-sm mb-4">
                        {exp.company}
                      </p>

                      <p className="text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-teal-500/10 text-teal-400
                                       px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
