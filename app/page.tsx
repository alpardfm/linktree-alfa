import { Logo3D } from "./logo-3d";
import { TiltCard } from "./tilt-card";
import { DiscordButton } from "./discord-button";
import { DotGrid } from "./dot-grid";
import { AnimatedSection } from "./animated-section";

const devLinks = [
  {
    label: "Tech Product",
    href: "https://fmard-web.vercel.app/",
    icon: "🚀",
  },
  {
    label: "GitHub",
    href: "https://github.com/alpardfm",
    icon: "💻",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mochalfaryandani/",
    icon: "📸",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ferdian-moch-alfa-ryandani-928b00235/",
    icon: "💼",
  },
];

const supportLinks = [
  {
    label: "Saweria",
    href: "https://saweria.co/alpardfms",
    icon: "☕",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-animated" />
      <DotGrid />
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ width: "100%", maxWidth: "380px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
          {/* Avatar 3D */}
          <Logo3D />

          {/* Name & Tagline */}
          <AnimatedSection delay={0.2}>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#e6edf3", letterSpacing: "-0.02em" }}>Alfa</h1>
              <p style={{ marginTop: "8px", fontSize: "14px", color: "#8b949e", fontStyle: "italic" }}>
                &ldquo;make it simple but significant&rdquo;
              </p>
            </div>
          </AnimatedSection>

          {/* Dev Section */}
          <div style={{ width: "100%" }}>
            <AnimatedSection delay={0.3}>
              <p className="section-label">Main</p>
            </AnimatedSection>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <TiltCard href="https://alpardfm.my.id" delay={0.35}>
                <span className="icon">🏠</span>
                <span>Main Profile</span>
                <span className="arrow">→</span>
              </TiltCard>
            </div>
          </div>

          {/* Dev Section */}
          <div style={{ width: "100%" }}>
            <AnimatedSection delay={0.4}>
              <p className="section-label">Dev</p>
            </AnimatedSection>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {devLinks.map((link, i) => (
                <TiltCard key={link.label} href={link.href} delay={0.5 + i * 0.1}>
                  <span className="icon">{link.icon}</span>
                  <span>{link.label}</span>
                  <span className="arrow">→</span>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Social Section */}
          <div style={{ width: "100%" }}>
            <AnimatedSection delay={0.6}>
              <p className="section-label">Social</p>
            </AnimatedSection>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {socialLinks.map((link, i) => (
                <TiltCard key={link.label} href={link.href} delay={0.7 + i * 0.1}>
                  <span className="icon">{link.icon}</span>
                  <span>{link.label}</span>
                  <span className="arrow">→</span>
                </TiltCard>
              ))}
              <DiscordButton delay={0.9} />
            </div>
          </div>

          {/* Support Section */}
          <div style={{ width: "100%" }}>
            <AnimatedSection delay={1.0}>
              <p className="section-label">Support</p>
            </AnimatedSection>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {supportLinks.map((link, i) => (
                <TiltCard key={link.label} href={link.href} delay={1.1 + i * 0.1}>
                  <span className="icon">{link.icon}</span>
                  <span>{link.label}</span>
                  <span className="arrow">→</span>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Footer */}
          <AnimatedSection delay={1.3}>
            <p style={{ fontSize: "11px", color: "#30363d", marginTop: "16px" }}>
              © 2025 Alfa
            </p>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
}
