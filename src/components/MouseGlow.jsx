import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="pointer-events-none fixed top-0 left-0 w-72 h-72 rounded-full 
                 bg-teal-400/20 blur-3xl z-0"
    />
  );
}
