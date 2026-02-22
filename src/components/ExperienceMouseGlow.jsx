import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ExperienceMouseGlow({ containerRef }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const move = (e) => {
      const rect = container.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setShow(true);
    };

    const leave = () => setShow(false);

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", leave);

    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", leave);
    };
  }, [containerRef]);

  return (
    <motion.div
      animate={{
        x: pos.x - 200,
        y: pos.y - 200,
        opacity: show ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px]
                 bg-teal-400/15 blur-3xl rounded-full"
    />
  );
}
