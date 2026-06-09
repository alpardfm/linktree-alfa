"use client";

import { useState } from "react";
import { TiltCard } from "./tilt-card";

export function DiscordButton({ delay = 0 }: { delay?: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("_alpardfm");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TiltCard onClick={handleCopy} delay={delay}>
      <span className="icon">🎮</span>
      <span>Discord</span>
      <span className="arrow" style={{ fontSize: "12px" }}>
        {copied ? "✓ Copied!" : "_alpardfm"}
      </span>
    </TiltCard>
  );
}
