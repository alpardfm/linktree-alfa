"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Logo3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 6;
    const rotateY = (centerX - x) / 6;
    setTransform(`perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glow-ring"
      style={{ transform, transition: transform ? "none" : "transform 0.5s ease", cursor: "pointer" }}
    >
      <div style={{ width: "112px", height: "112px", borderRadius: "50%", overflow: "hidden", position: "relative", border: "3px solid #0d1117" }}>
        <Image
          src="/mylogo.png"
          alt="Alfa"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </motion.div>
  );
}
